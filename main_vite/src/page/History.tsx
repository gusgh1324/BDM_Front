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

const History = () => {
  const location = useLocation();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fileUrlParam = params.get("fileUrl");
    const analysisResultParam = params.get("analysisResult");

    console.log(fileUrl);
    if (fileUrlParam) {
      setFileUrl(fileUrlParam);
    }
    if (analysisResultParam) {
      setAnalysisResult(decodeURIComponent(analysisResultParam));
    }
  }, [fileUrl, location.search]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <div className="flex justify-center mt-8 md:w-1/2">
          {fileUrl && <img src="{fileUrl}" className="uploaded-image" />}
        </div>

        {fileUrl && analysisResult && (
          <div
            className={`absolute transition-all duration-1000 delay-1000 overflow-hidden max-h-[70vh] opacity-100 w-full md:w-1/2 translate-x-0 md:pl-4`}
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
                  비브리오: {JSON.parse(analysisResult)[activeTab][1].비브리오}%
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
              <div className="social_icon">
                <LinkShareIcon className="w-12 h-12" src={""} alt={""} />
              </div>
              <div className="social_icon">
                <FacebookIcon className="w-12 h-12" src={""} alt={""} />
              </div>
              <div className="social_icon">
                <KakaotalkIcon className="w-12 h-12" src={""} alt={""} />
              </div>
              <div className="social_icon">
                <TwitterIcon className="w-12 h-12" src={""} alt={""} />
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default History;
