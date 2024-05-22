import { useImageStore } from "../../../Store";
import "../Main.css";
import {
  TwitterIcon,
  FacebookIcon,
  KakaotalkIcon,
  LinkShareIcon,
} from "../../icon/SocialIcons";

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
            {analysisResult.map((result, index) => (
              <div key={index}>
                <h3 className="font-bold">{result[0]}</h3>
                <p>림포시스티스병: {result[1].림포시스티스병}%</p>
                <p>비브리오: {result[1].비브리오}%</p>
                <p>아가미흡충: {result[1].아가미흡충}%</p>
                <p>연쇄구균병: {result[1].연쇄구균병}%</p>
              </div>
            ))}
          </div>
          <div className="result-url flex items-center">
            <div className="social_icon">
              <LinkShareIcon
                className="w-12 h-12"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
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
