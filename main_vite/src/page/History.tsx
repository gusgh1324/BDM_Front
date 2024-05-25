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
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [newTextBoxState, setNewTextBoxState] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const analysisResultParam = params.get("analysisResult");

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

  const handleTabClick = (index: number) => {
    setActiveTab(index);
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
                  src="http://localhost:8089/server/api/saveAnalysis/9dca8e03-375c-4899-9496-15c7cb0c3600-background_test.jpg
                  "
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
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default History;
