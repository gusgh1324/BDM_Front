import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

const useStore = create<State>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      toggleLogin: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    },
  ),
);

export default useStore;
