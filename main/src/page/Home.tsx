import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/layout/Main";

const Home = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
<<<<<<< HEAD
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
      // 파일 처리 로직 구현
      console.log(files);
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
  }, []);

=======

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
      //const files = e.dataTransfer.files;
      //파일 처리 로직 구현
      //console.log(files);
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
  }, []);

>>>>>>> main
  return (
    <div className="page-container">
      <div className="content-container">
        <Header />
        <Main />
        <Footer />
      </div>
      {isDragging && (
<<<<<<< HEAD
        <div className="fixed inset-0 bg-blue-500 bg-opacity-50 z-50 flex items-center justify-center">
=======
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-500 bg-opacity-50">
>>>>>>> main
          <p className="text-4xl font-bold text-purple-600 drop-shadow-[0_3px_3px_rgba(255,255,255,1.0)]">
            아무 곳에나 이미지를 놓으세요
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
