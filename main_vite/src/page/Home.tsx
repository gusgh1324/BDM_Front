import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";
import { useImageStore } from "../Store";

const Home = () => {
  const { setUploadedImage, setAnalysisResult } = useImageStore();
  const [isDragging, setIsDragging] = useState<boolean>(false);
  useEffect(() => {
    let dragCount = 0;

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCount++;
      if (dragCount === 1) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCount--;
      if (dragCount === 0) {
        setIsDragging(false);
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      dragCount = 0;
      setIsDragging(false);
      const files = Array.from(e.dataTransfer?.files || []);
      if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
          const uploadedImage = e.target?.result as string;
          setUploadedImage(uploadedImage);
          // 이미지 분석 로직 처리
          // ...
          // 분석 결과를 analysisResult 상태에 저장
          setAnalysisResult("분석 결과 예시");
        };
        reader.readAsDataURL(file);
      }
    };

    window.addEventListener("dragenter", handleDragEnter);
    window.addEventListener("dragleave", handleDragLeave);
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("drop", handleDrop);

    return () => {
      window.removeEventListener("dragenter", handleDragEnter);
      window.removeEventListener("dragleave", handleDragLeave);
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("drop", handleDrop);
    };
  }, [setAnalysisResult, setUploadedImage]);

  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <Main />
        <Footer />
      </div>
      {isDragging && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500 bg-opacity-50">
          <p className="text-4xl font-bold text-purple-600 drop-shadow-[0_3px_3px_rgba(255,255,255,1.0)]">
            아무 곳에나 이미지를 놓으세요
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
