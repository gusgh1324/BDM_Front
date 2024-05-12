import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

interface ImageState {
  uploadedImage: string | null;
  analysisResult: string | null;
  setUploadedImage: (image: string | null) => void;
  setAnalysisResult: (result: string | null) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      toggleLogin: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useImageStore = create<ImageState>((set) => ({
  uploadedImage: null,
  analysisResult: null,
  setUploadedImage: (image: string | null) => set({ uploadedImage: image }),
  setAnalysisResult: (result: string | null) => set({ analysisResult: result }),
}));
