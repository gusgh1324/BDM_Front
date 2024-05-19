import { useState, useEffect } from "react";
import axios from "axios";

export const useUserImage = (token: string) => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setError("No token provided");
      return;
    }

    const fetchUserImage = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8089/server/members/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // CORS 문제를 해결하기 위한 설정
          },
        );

        if (response.status === 200) {
          setUserImage(response.data.userImage);
        } else {
          setError("Failed to fetch user image.");
        }
      } catch (error) {
        setError("An error occurred while fetching the user image.");
        console.error("Failed to fetch user image:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserImage();
  }, [token]);

  return { userImage, loading, error };
};
