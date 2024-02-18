import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

export type ThemeState = {
  theme: string;
};

export type ThemeActions = {
  setTheme: (theme: string) => void;
};

export type ThemeStore = ThemeState & ThemeActions;

export const defaultInitState: ThemeState = {
  theme: "mytheme",
};

export const createThemeStore = (initState: ThemeState = defaultInitState) => {
  return createStore<ThemeStore>()(
    persist(
      (set) => ({
        ...initState,
        setTheme: (theme: string) => set({ theme }),
      }),
      {
        name: "theme",
      }
    )
  );
};
