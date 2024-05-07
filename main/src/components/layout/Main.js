import React from "react";
import CloudUploadIcon from "../icon/CloudUploadIcon";
import "./Main.css";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <div className="md:w-1/2 md:pr-16">
        <h1 className="main-title">
          생선의 상태를 <br /> 분석하세요
        </h1>
        <p className="main-description">
          우리는 생선의 질병 여부를 정확하게 판별하는 데 도움을 주는 혁신적인 웹사이트입니다.
          최신 이미지 분석 기술과 방대한 질병 데이터베이스를 활용하여, 여러분의 생선이
          건강한지 아닌지를 손쉽게 확인할 수 있습니다.
          <br />
          생선을 구매할 때, 겉모습만으로는 질병 여부를 판단하기 어려울 수 있습니다. 하지만 '수상한 생선'을
          이용하면, 간단히 생선 사진을 업로드하는 것만으로도 내부적인 질병까지 정확하게 진단받을 수 있습니다.
        </p>
      </div>
      <div className="md:w-1/2 mt-8">
        <label className="upload-label" htmlFor="file-upload">
          <div className="upload-content">
            <CloudUploadIcon className="upload-icon" />
            <span className="upload-text">이미지 업로드</span>
            <span className="upload-subtext">또는 파일 놓기</span>
          </div>
          <input className="sr-only" id="file-upload" type="file" />
        </label>
      </div>
    </div>
  );
};

export default Main;