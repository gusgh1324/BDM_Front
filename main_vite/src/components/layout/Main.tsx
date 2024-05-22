import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Main.css";
import { useImageStore } from "../../Store";
import { useImageAnalysis } from "../../hooks/useImageAnalysis";
import useToken from "../../hooks/useToken";
import BeforeAnalysis from "./mainpage/BeforeAnalysis";
import AfterAnalysis from "./mainpage/AfterAnalysis";
import CloudUploadIcon from "../icon/CloudUploadIcon";

interface MainProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const Main = ({ file, setFile }: MainProps) => {
  const { uploadedImage, analysisResult, setUploadedImage, setAnalysisResult } =
    useImageStore();
  const [animate, setAnimate] = useState(false);
  const [newTextBoxState, setNewTextBoxState] = useState(false);
  const token = useToken();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    analysisResult: result,
    loading,
    error,
  } = useImageAnalysis(file, token!);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
      setUploadedImage(URL.createObjectURL(file)); // Show the selected image
    }
  };

  const saveResultToUrl = useCallback(
    (result: string) => {
      const encodedResult = encodeURIComponent(JSON.stringify(result));
      navigate(`?analysisResult=${encodedResult}`, { replace: true });
    },
    [navigate]
  );

  useEffect(() => {
    if (!loading && result) {
      setAnalysisResult(result);
      setAnimate(true);
      saveResultToUrl(result);
    }
  }, [loading, result, setAnalysisResult, saveResultToUrl]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const storedResult = params.get("analysisResult");
    if (storedResult) {
      const parsedResult = JSON.parse(decodeURIComponent(storedResult));
      setAnalysisResult(parsedResult);
    }
  }, [location.search, setAnalysisResult]);

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setNewTextBoxState(true);
      }, 100); // 기존 텍스트 박스가 사라진 후 0.1초 딜레이로 애니메이션 시작
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  return (
    <div className="relative flex flex-col mt-10 md:flex-row">
      <div
        className={`transition-all duration-1000 overflow-hidden max-h-[70vh] ${
          uploadedImage
            ? "opacity-0 md:w-0 md:pr-0"
            : "opacity-100 md:w-1/2 md:pr-16"
        }`}
      >
        <BeforeAnalysis />
      </div>

      <div className="flex justify-center mt-8 md:w-1/2">
        <label className="upload-label" htmlFor="file-upload">
          <div className="relative w-full h-full">
            {uploadedImage ? (
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="uploaded-image"
              />
            ) : (
              <div className="upload-content">
                <CloudUploadIcon className="upload-icon" />
                <span className="upload-text">이미지 업로드</span>
                <span className="upload-subtext">또는 파일 놓기</span>
              </div>
            )}
          </div>
          <input
            className="sr-only"
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </label>
      </div>

      {uploadedImage && loading && (
        <div className="loading-indicator">이미지 분석 중...</div>
      )}

      {uploadedImage && !loading && (
        <AfterAnalysis
          loading={loading}
          analysisResult={analysisResult}
          newTextBoxState={newTextBoxState}
          error={error}
        />
      )}
    </div>
  );
};

export default Main;
