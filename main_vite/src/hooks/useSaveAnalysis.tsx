import { useState, useCallback } from "react";
import axios from "axios";
import imageCompression from "browser-image-compression";

interface SaveAnalysisResponse {
  userId: number;
  fileUrl: string;
  analysisResult: string;
}

interface SaveAnalysisResult {
  loading: boolean;
  error: string | null;
  data: SaveAnalysisResponse | null;
  saveAnalysis: (
    file: File,
    analysisResult: string | null,
    token: string
  ) => Promise<void>;
}

export const useSaveAnalysis = (): SaveAnalysisResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SaveAnalysisResponse | null>(null);

  const saveAnalysis = useCallback(
    async (file: File, analysisResult: string | null, token: string) => {
      setLoading(true);
      setError(null);

      try {
        // 이미지 압축 옵션 설정
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        };

        // 이미지 압축
        const compressedFile = await imageCompression(file, options);

        const formData = new FormData();
        formData.append("file", compressedFile);
        formData.append("analysisResult", JSON.stringify(analysisResult));

        const response = await axios.post(
          "http://localhost:8089/server/api/saveAnalysis/save", // Todo.경로 수정 필요
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("분석 결과 저장됨");
        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, data, saveAnalysis };
};
