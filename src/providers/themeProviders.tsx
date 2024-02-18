"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { createThemeStore, type ThemeStore } from "@/stores/theme";

export const ThemeStoreContext = createContext<StoreApi<ThemeStore> | null>(null);

export interface ThemeStoreProviderProps {
  children: ReactNode;
}

export const ThemeStoreProvider = ({ children }: ThemeStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ThemeStore>>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore();
  }

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>{children}</ThemeStoreContext.Provider>
  );
};

export const useThemeStore = <T,>(selector: (store: ThemeStore) => T): T => {
  const counterStoreContext = useContext(ThemeStoreContext);

  if (!counterStoreContext) {
    throw new Error("useThemeStore must be use within ThemeStoreProvider");
  }

  return useStore(counterStoreContext, selector);
};
