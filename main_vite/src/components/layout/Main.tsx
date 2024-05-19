import React, { useState, useEffect } from "react";
import CloudUploadIcon from "../icon/CloudUploadIcon";
import "./Main.css";
import { useImageStore } from "../../Store";

const Main = () => {
  const { uploadedImage, analysisResult, setUploadedImage, setAnalysisResult } =
    useImageStore();
  const [animate, setAnimate] = useState(false);
  const [newTextBoxState, setNewTextBoxState] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        // 이미지 분석 로직 처리
        // ...
        // 분석 결과를 analysisResult 상태에 저장
        setAnalysisResult("분석 결과 예시");
        setAnimate(true); // 애니메이션 트리거
      };
      reader.readAsDataURL(file);
    }
  };

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
      <div className="mt-8 md:w-1/2 flex justify-center">
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
      {uploadedImage && (
        <div
          className={`absolute transition-all duration-1000 delay-1000 overflow-hidden max-h-[70vh] ${
            newTextBoxState
              ? "opacity-100 w-full md:w-1/2 translate-x-0"
              : "opacity-0 w-0 translate-x-full"
          } md:pl-4`}
          style={{ right: 0 }}
        >
          <h2 className="main-title">분석 결과</h2>
          <p className="main-description">{analysisResult}</p>
        </div>
      )}
    </div>
  );
};

export default Main;
