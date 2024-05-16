// src/hooks/useRegister.ts
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useRegisterStore } from "../Store";

const useRegister = () => {
  const navigate = useNavigate();
  const { setLoading, setError } = useRegisterStore();

  const register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8089/server/auth/join",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        alert("회원가입이 완료되었습니다. 로그인해 주세요.");
        navigate("/login");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { register };
};

export default useRegister;
