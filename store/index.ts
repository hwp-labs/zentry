import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { IAppSlice, appSlice } from "./features/appSlice";
import { IPageSlice, pageSlice } from "./features/pageSlice";
import { IFilterSlice, filterSlice } from "./features/filterSlice";

export type AppStore = IAppSlice & IPageSlice & IFilterSlice;

export const useAppStore = create<AppStore>()(
  subscribeWithSelector((set, get, api) => ({
    ...appSlice(set, get, api),
    ...pageSlice(set, get, api),
    ...filterSlice(set, get, api),
  }))
);