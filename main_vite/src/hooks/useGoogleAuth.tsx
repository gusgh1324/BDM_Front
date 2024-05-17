import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore, useLoginStore } from "../Store";

export const useGoogleAuth = () => {
  const navigate = useNavigate();
  const { setLoading, setError } = useLoginStore();
  const { toggleLogin } = useStore();

  return useGoogleLogin({
    onSuccess: async (response) => {
      setLoading(true);
      setError(null);

      const code = response.code; // code를 받습니다.
      const redirectUri = "http://localhost:3000"; // 프론트엔드에서 사용된 redirect_uri

      try {
        const result = await axios.post(
          "http://localhost:8089/server/auth/google-login",
          { code, redirectUri }
        );

        if (result.status === 200) {
          const token = result.data.token;
          localStorage.setItem("token", token);
          toggleLogin();
          alert("로그인 되었습니다.");
          navigate("/");
        } else {
          setError("Google login failed. Please try again.");
        }
      } catch (error) {
        setError("An error occurred during Google login. Please try again.");
        console.error("Failed to send code to backend:", error);
      } finally {
        setLoading(false);
      }
    },
    onError: () => {
      setError("Google Login Failed");
      console.error("Google Login Failed");
    },
    flow: "auth-code",
  });
};
