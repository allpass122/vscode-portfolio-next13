import { createStore } from "zustand/vanilla";

export type ActivityState = {
  list: {
    name: string;
    disabled: boolean;
  }[];
};

export type ActivityActions = {
  setDisabled: (name: string, disabled: boolean) => void;
};

export type ActivityStore = ActivityState & ActivityActions;

export const defaultInitState: ActivityState = {
  list: [
    {
      name: "home",
      disabled: false,
    },
    {
      name: "github",
      disabled: false,
    },
    {
      name: "projects",
      disabled: false,
    },
    {
      name: "articles",
      disabled: true,
    },
    {
      name: "contact",
      disabled: false,
    },
    {
      name: "leetcode",
      disabled: false,
    },
  ],
};

export const createActivityStore = (initState: ActivityState = defaultInitState) => {
  return createStore<ActivityStore>()((set) => ({
    ...initState,
    setDisabled: (name, disabled) =>
      set((state) => ({
        list: [...state.list.filter((item) => item.name !== name), { name, disabled }],
      })),
  }));
};
