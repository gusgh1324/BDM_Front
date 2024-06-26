import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../components/layout/Main.css";
import {
  TwitterIcon,
  FacebookIcon,
  KakaotalkIcon,
  LinkShareIcon,
} from "../components/icon/SocialIcons";
import axios from "axios";

const History = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [newTextBoxState, setNewTextBoxState] = useState(false);
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fileUrlParam = params.get("fileUrl");
    const analysisResultParam = params.get("analysisResult");

    if (fileUrlParam) {
      setFileUrl(fileUrlParam);
    }
    if (analysisResultParam) {
      setAnalysisResult(decodeURIComponent(analysisResultParam));
    }
    if (analysisResult) {
      setAnimate(true);
    }
    if (animate) {
      const timeout = setTimeout(() => {
        setNewTextBoxState(true);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [analysisResult, animate, location.search]);

  const shortenUrl = async (): Promise<string | null> => {
    try {
      const response = await axios.post(
        "https://api.lrl.kr/v5/url/short",
        {
          key: "Z9cFP2r3wUwkiwkjsAf4PeA9yWEGpUuU",
          url: window.location.href,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.result) {
        setShortUrl(response.data.result.url); // 성공 시 단축된 URL 설정
        return response.data.result.url;
      } else {
        console.error("Error shortening URL:", response.data.message);
        return null;
      }
    } catch (error) {
      console.error("Error shortening URL:", error);
      return null;
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleLinkShareClick = async () => {
    if (!shortUrl) {
      const url = await shortenUrl();
      if (url) {
        navigator.clipboard.writeText(url);
        alert("URL이 클립보드에 복사되었습니다.");
      }
    } else {
      navigator.clipboard.writeText(shortUrl);
      alert("URL이 클립보드에 복사되었습니다.");
    }
  };

  const handleSocialShareClick = async (socialUrlTemplate: string) => {
    if (!shortUrl) {
      const url = await shortenUrl();
      if (url) {
        window.open(
          socialUrlTemplate.replace("{url}", encodeURIComponent(url)),
          "_blank",
          "noopener,noreferrer"
        );
      }
    } else {
      window.open(
        socialUrlTemplate.replace("{url}", encodeURIComponent(shortUrl)),
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <div className="relative flex flex-col mt-10 md:flex-row">
          <div
            className={`transition-all duration-1000 overflow-hidden h-[70vh] opacity-0 md:w-0 md:pr-0"`}
          ></div>
          <div className="flex justify-center mt-8 md:w-1/2">
            <label className="upload-label" htmlFor="file-upload">
              <div className="relative w-full h-full">
                <img
                  src={fileUrl || ""}
                  alt="Uploaded"
                  className="uploaded-image"
                />
              </div>
            </label>
          </div>
          {analysisResult && (
            <div
              className={`absolute transition-all duration-1000 delay-1000 overflow-hidden max-h-[70vh] ${
                newTextBoxState
                  ? "opacity-100 w-full md:w-1/2 translate-x-0"
                  : "opacity-0 w-0 translate-x-full"
              } md:pl-4`}
              style={{ right: 0 }}
            >
              <h2 className="main-title">분석 결과</h2>
              <div className="main-description">
                <div className="flex border-b border-gray-200">
                  {JSON.parse(analysisResult).map(
                    (result: string, index: number) => (
                      <button
                        key={index}
                        className={`p-4 focus:outline-none ${
                          activeTab === index
                            ? "border-b-2 border-blue-500 text-blue-500"
                            : "text-gray-500"
                        }`}
                        onClick={() => handleTabClick(index)}
                      >
                        {result[0]}
                      </button>
                    )
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold">
                    {JSON.parse(analysisResult)[activeTab][0]}
                  </h3>
                  <p>
                    림포시스티스병:{" "}
                    {JSON.parse(analysisResult)[activeTab][1].림포시스티스병}%
                  </p>
                  <p>
                    비브리오:{" "}
                    {JSON.parse(analysisResult)[activeTab][1].비브리오}%
                  </p>
                  <p>
                    아가미흡충:{" "}
                    {JSON.parse(analysisResult)[activeTab][1].아가미흡충}%
                  </p>
                  <p>
                    연쇄구균병:{" "}
                    {JSON.parse(analysisResult)[activeTab][1].연쇄구균병}%
                  </p>
                </div>
              </div>
              <div className="result-url flex items-center">
                <div className="social_icon" onClick={handleLinkShareClick}>
                  <LinkShareIcon className="w-12 h-12" src={""} alt={""} />
                </div>
                <div
                  className="social_icon"
                  onClick={() =>
                    handleSocialShareClick(
                      "https://www.facebook.com/sharer/sharer.php?u={url}"
                    )
                  }
                >
                  <FacebookIcon className="w-12 h-12" src={""} alt={""} />
                </div>
                <div
                  className="social_icon"
                  onClick={() =>
                    handleSocialShareClick(
                      "https://story.kakao.com/share?url={url}"
                    )
                  }
                >
                  <KakaotalkIcon className="w-12 h-12" src={""} alt={""} />
                </div>
                <div
                  className="social_icon"
                  onClick={() =>
                    handleSocialShareClick(
                      "https://twitter.com/intent/tweet?url={url}"
                    )
                  }
                >
                  <TwitterIcon className="w-12 h-12" src={""} alt={""} />
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default History;
