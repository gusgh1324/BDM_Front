// src/hooks/useLogin.ts
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStore, useLoginStore } from "../Store";

const useLogin = () => {
  const navigate = useNavigate();
  const { setLoading, setError } = useLoginStore();
  const { toggleLogin } = useStore();

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:8089/server/auth/login",
        {
          email,
          pass: password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        toggleLogin();
        alert("로그인 되었습니다.");
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { login };
};

export default useLogin;
