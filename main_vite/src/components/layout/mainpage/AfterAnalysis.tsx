import { useImageStore } from "../../../Store";
import "../Main.css";
import {
  TwitterIcon,
  FacebookIcon,
  KakaotalkIcon,
  LinkShareIcon,
} from "../../icon/SocialIcons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AfterAnalysisProps {
  loading: boolean;
  analysisResult: string | null;
  newTextBoxState: boolean;
  error: string | null;
}

const AfterAnalysis = ({
  loading,
  analysisResult,
  newTextBoxState,
  error,
}: AfterAnalysisProps) => {
  const { uploadedImage } = useImageStore();
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleLinkShareClick = () => {
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);
    const analysisResultParam = params.get("analysisResult");
    if (analysisResultParam) {
      navigate(`/history?analysisResult=${analysisResultParam}`);
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
          <div className="flex items-center result-url">
            <div className="social_icon">
              <LinkShareIcon
                className="w-12 h-12"
                onClick={handleLinkShareClick}
                src={""}
                alt={""}
              />
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
      {error && <div className="error-message">에러: {error}</div>}
    </>
  );
};

export default AfterAnalysis;
