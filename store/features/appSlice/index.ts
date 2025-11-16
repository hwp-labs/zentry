import { APP } from "@/constants/APP";
import { persist } from "zustand/middleware";
import { IAppSliceAction, IAppSliceState, IJob, IUser } from "./types";

export interface IAppSlice extends IAppSliceState, IAppSliceAction { }

const initialState: IAppSliceState = {
  user: {},
  jobs: {},
};

export const appSlice = persist<IAppSlice>(
  (set, get) => ({
    ...initialState,

    resetAppSlice: () => set({ ...initialState }),

    setUser: (payload: IUser) =>
      set((s) => ({
        user: s.user ? { ...s.user, ...payload } : ({ ...payload }),
      })),

    resetJobs: () => set({ jobs: {} }),

    addJob: (name: string, job: IJob) =>
      set((s) => ({
        jobs: s.jobs
          ? { ...s.jobs, [name]: job }
          : { [name]: job },
      })),

    removeJob: (name: string) =>
      set((s) => {
        const filteredJobs: Record<string, IJob> = {}

        Object.entries(s.jobs ?? {}).map(([key, value]) => {
          if (key !== name) {
            filteredJobs[key] = value;
          }
        });

        return { jobs: filteredJobs };
      }),
  }),
  {
    name: APP.localStorageKey,
    partialize: (s) =>
      ({
        user: s.user,
        jobs: s.jobs,
      }) as IAppSlice,
  }
);
