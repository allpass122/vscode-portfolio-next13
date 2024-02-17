"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { type StoreApi, useStore } from "zustand";

import { createActivityStore, type ActivityStore } from "@/stores/activity";

export const ActivityStoreContext = createContext<StoreApi<ActivityStore> | null>(null);

export interface ActivityStoreProviderProps {
  children: ReactNode;
}

export const ActivityStoreProvider = ({ children }: ActivityStoreProviderProps) => {
  const storeRef = useRef<StoreApi<ActivityStore>>();
  if (!storeRef.current) {
    storeRef.current = createActivityStore();
  }

  return (
    <ActivityStoreContext.Provider value={storeRef.current}>
      {children}
    </ActivityStoreContext.Provider>
  );
};

export const useActivityStore = <T,>(selector: (store: ActivityStore) => T): T => {
  const counterStoreContext = useContext(ActivityStoreContext);

  if (!counterStoreContext) {
    throw new Error("useActivityStore must be use within ActivityStoreProvider");
  }

  return useStore(counterStoreContext, selector);
};
