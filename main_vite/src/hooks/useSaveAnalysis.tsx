import { useState, useCallback } from "react";
import axios from "axios";

interface SaveAnalysisResult {
  loading: boolean;
  error: string | null;
  saveAnalysis: (
    file: File,
    analysisResult: string | null,
    token: string
  ) => Promise<void>;
}

export const useSaveAnalysis = (): SaveAnalysisResult => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveAnalysis = useCallback(
    async (file: File, analysisResult: string | null, token: string) => {
      setLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("analysisResult", JSON.stringify(analysisResult));

        const response = await axios.post(
          "http://localhost:8089/server/api/saveAnalysis/save", //Todo.경로 수정 필요
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Save analysis response:", response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, saveAnalysis };
};
