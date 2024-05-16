import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const useGoogleAuth = () => {
  return useGoogleLogin({
    onSuccess: async (response) => {
      const token = response.access_token;
      try {
        const result = await axios.post(
          "http://localhost:8089/server/auth/login",
          { token }
        );
        console.log(result.data);
        // 백엔드에서 받은 응답에 따라 추가 작업 수행
      } catch (error) {
        console.error("Failed to send token to backend:", error);
      }
    },
    onError: () => {
      console.error("Google Login Failed");
    },
  });
};
