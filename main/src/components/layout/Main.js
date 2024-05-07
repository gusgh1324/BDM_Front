import React from "react";
import CloudUploadIcon from "../icon/CloudUploadIcon";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10">
      <div className="md:w-1/2 md:pr-8">
        <h1 className="text-4xl font-bold mb-4">생선의 상태를 분석하세요</h1>
        <p className="text-lg text-gray-700 mb-10">
          우리는 생선의 질병 여부를 정확하게 판별하는 데 도움을 주는 혁신적인
          웹사이트입니다. 최신 이미지 분석 기술과 방대한 질병 데이터베이스를
          활용하여, 여러분이 구매하려는 생선이 건강한지 아닌지를 손쉽게 확인할
          수 있습니다.
          <br />
          생선을 구매할 때, 겉모습만으로는 질병 여부를 판단하기 어려울 수
          있습니다. 하지만 '수상한 생선'을 이용하면, 간단히 생선 사진을
          업로드하는 것만으로도 내부적인 질병까지 정확하게 진단받을 수 있습니다.
        </p>
      </div>
      <div className="md:w-1/2">
        <label
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
          htmlFor="file-upload"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <CloudUploadIcon className="text-gray-500 w-12 h-12" />
            <span className="mt-2 text-base text-gray-500">이미지 업로드</span>
            <span className="text-sm text-gray-400">또는 파일 놓기</span>
          </div>
          <input className="sr-only" id="file-upload" type="file" />
        </label>
      </div>
    </div>
  );
};

export default Main;
