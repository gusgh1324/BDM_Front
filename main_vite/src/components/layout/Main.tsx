import React, { useState, useEffect } from "react";
import CloudUploadIcon from "../icon/CloudUploadIcon";
import "./Main.css";
import { useImageStore } from "../../Store";
import { useImageAnalysis } from "../../hooks/useImageAnalysis";
import useToken from "../../hooks/useToken";

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

  useEffect(() => {
    if (!loading && result) {
      setAnalysisResult(result);
      setAnimate(true);
    }
  }, [loading, result, setAnalysisResult]);

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
        <h1 className="main-title">
          생선의 상태를 <br /> 분석하세요
        </h1>
        <p className="main-description">
          우리는 생선의 질병 여부를 정확하게 판별하는 데 도움을 주는 혁신적인
          웹사이트입니다. 최신 이미지 분석 기술과 방대한 질병 데이터베이스를
          활용하여, 여러분의 생선이 건강한지 아닌지를 손쉽게 확인할 수 있습니다.
          <br />
          생선을 구매할 때, 겉모습만으로는 질병 여부를 판단하기 어려울 수
          있습니다. 하지만 '수상한 생선'을 이용하면, 간단히 생선 사진을
          업로드하는 것만으로도 내부적인 질병까지 정확하게 진단받을 수 있습니다.
        </p>
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
      {uploadedImage && !loading && Array.isArray(analysisResult) && (
        <div>
          <h2 className="main-title">분석 결과</h2>
          <div className="main-description">
            {analysisResult.map((result, index) => (
              <div key={index}>
                <h3>{result.modelName}</h3>
                <p>림포시스티스병: {result.림포시스티스병}%</p>
                <p>비브리오: {result.비브리오}%</p>
                <p>아가미흡충: {result.아가미흡충}%</p>
                <p>연쇄구균병: {result.연쇄구균병}%</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {error && <div className="error-message">에러: {error}</div>}
    </div>
  );
};

export default Main;
