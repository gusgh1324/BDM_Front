import { useImageStore } from "../../../Store";
import "../Main.css";
import {
  TwitterIcon,
  FacebookIcon,
  KakaotalkIcon,
  LinkShareIcon,
} from "../../icon/SocialIcons";
import { useState } from "react";
import axios from "axios";

interface SaveAnalysisResponse {
  fileUrl: string;
  analysisResult: string;
}

interface AfterAnalysisProps {
  loading: boolean;
  analysisResult: string | null;
  newTextBoxState: boolean;
  error: string | null;
  savedData: SaveAnalysisResponse | null; // savedData 속성 추가
}

const AfterAnalysis = ({
  loading,
  analysisResult,
  newTextBoxState,
  error,
  savedData,
}: AfterAnalysisProps) => {
  const { uploadedImage } = useImageStore();
  const [activeTab, setActiveTab] = useState(0);
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const shortenUrl = async (): Promise<string | null> => {
    if (savedData) {
      try {
        const response = await axios.post(
          "https://api.lrl.kr/v5/url/short",
          {
            key: "Z9cFP2r3wUwkiwkjsAf4PeA9yWEGpUuU",
            url: `${window.location.origin}/history?fileUrl=${encodeURIComponent(savedData.fileUrl)}&analysisResult=${encodeURIComponent(savedData.analysisResult)}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.result) {
          setShortUrl(response.data.result.url);
          return response.data.result.url;
        } else {
          console.error("Error shortening URL:", response.data.message);
          return null;
        }
      } catch (error) {
        console.error("Error shortening URL:", error);
        return null;
      }
    }
    return null;
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
    <>
      {uploadedImage && !loading && Array.isArray(analysisResult) && (
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
              {analysisResult.map((result, index) => (
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
              ))}
            </div>
            <div className="p-4">
              <h3 className="font-bold">{analysisResult[activeTab][0]}</h3>
              <p>
                림포시스티스병: {analysisResult[activeTab][1].림포시스티스병}%
              </p>
              <p>비브리오: {analysisResult[activeTab][1].비브리오}%</p>
              <p>아가미흡충: {analysisResult[activeTab][1].아가미흡충}%</p>
              <p>연쇄구균병: {analysisResult[activeTab][1].연쇄구균병}%</p>
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
      {error && <div className="loading-container loading-text">{error}</div>}
    </>
  );
};

export default AfterAnalysis;
