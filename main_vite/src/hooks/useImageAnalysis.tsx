import { useState, useEffect } from "react";
import axios from "axios";

export const useImageAnalysis = (file: File | null, token: string) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [progress, setProgress] = useState<string[]>([]);
  const [status, setStatus] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    if (!token) {
      setLoading(false);
      setError("No token provided");
      return;
    }

    const uploadAndAnalyzeImage = async () => {
      setLoading(true);
      setProgress([]);
      setStatus("");
      setAnalysisResult(null);
      setError(null);

      try {
        // 이미지 업로드
        const formData = new FormData();
        formData.append("image", file);
        formData.append("token", token);

        const response = await axios.post(
          "http://localhost:8089/server/api/predictions/analyze_image",
          // "http://localhost:8089/server/api/fish-disease/detect",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        // 업로드된 이미지 URL을 상태에 저장
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);

        if (response.status === 200) {
          // SSE 설정
          const eventSource = new EventSource(
            "http://localhost:8089/server/api/predictions/analyze_image"
          );

          eventSource.addEventListener("progress", (event: MessageEvent) => {
            setProgress((prev) => [...prev, event.data]);
          });

          eventSource.addEventListener("error", (event: MessageEvent) => {
            setStatus("Error: " + event.data);
            setError(event.data);
            eventSource.close();
          });

          eventSource.addEventListener("complete", (event: MessageEvent) => {
            setStatus("Complete: " + event.data);
            setAnalysisResult(event.data);
            eventSource.close();
          });

          return () => {
            eventSource.close();
          };
        } else {
          setError("이미지 분석을 시작할 수 없습니다.");
        }
      } catch (error) {
        setError("이미지를 업로드하고 분석하는 중에 오류가 발생했습니다.");
        console.error("이미지 업로드 및 분석 실패:", error);
      } finally {
        setLoading(false);
      }
    };

    uploadAndAnalyzeImage();
  }, [file, token]);

  return { uploadedImage, progress, status, analysisResult, loading, error };
};
