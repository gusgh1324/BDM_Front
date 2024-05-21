import { useState, useEffect } from "react";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const localToken = localStorage.getItem("token");

    if (sessionToken) {
      setToken(sessionToken);
    } else if (localToken) {
      setToken(localToken);
    } else {
      setToken(null);
    }
  }, []);

  return token;
};

export default useToken;
