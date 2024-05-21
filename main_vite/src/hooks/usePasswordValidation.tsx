import { useState, useEffect } from "react";

export const usePasswordValidation = (password: string) => {
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [noWhitespace, setNoWhitespace] = useState(false);

  useEffect(() => {
    setIsLengthValid(password.length >= 8);
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    setNoWhitespace(/^\S.*\S$/.test(password));
  }, [password]);

  return {
    isLengthValid,
    hasNumber,
    hasSpecialChar,
    noWhitespace,
  };
};
