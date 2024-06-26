import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  isLoggedIn: boolean;
  toggleLogin: () => void;
  setLoggedIn: (loggedIn: boolean) => void;
}

interface ImageState {
  uploadedImage: string | null;
  analysisResult: string | null;
  setUploadedImage: (image: string | null) => void;
  setAnalysisResult: (result: string | null) => void;
}

interface LoginState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  rememberMe: boolean;
  setRememberMe: (rememberMe: boolean) => void;
}

interface RegisterState {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (confirmPassword: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  agreeToTerms: boolean;
  setAgreeToTerms: (agreeToTerms: boolean) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      toggleLogin: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
      setLoggedIn: (loggedIn: boolean) => set({ isLoggedIn: loggedIn }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useImageStore = create<ImageState>((set) => ({
  uploadedImage: null,
  analysisResult: null,
  setUploadedImage: (image: string | null) => set({ uploadedImage: image }),
  setAnalysisResult: (result: string | null) => set({ analysisResult: result }),
}));

export const useLoginStore = create<LoginState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
  rememberMe: false,
  setRememberMe: (rememberMe) => set({ rememberMe }),
}));

export const useRegisterStore = create<RegisterState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  password: "",
  setPassword: (password) => set({ password }),
  confirmPassword: "",
  setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
  agreeToTerms: false,
  setAgreeToTerms: (agreeToTerms) => set({ agreeToTerms }),
}));
