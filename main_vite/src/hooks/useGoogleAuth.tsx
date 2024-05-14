import { useGoogleLogin } from "@react-oauth/google";

export const useGoogleAuth = () => {
  return useGoogleLogin({
    onSuccess: (response) => {
      console.log(response);
      // 구글 로그인 성공 시 처리 로직
    },
    onError: () => {
      console.error("Google Login Failed");
    },
  });
};
