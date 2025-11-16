export interface IUser {
  name?: string;
  email?: string;
  role?: string;
  tenantName?: string;
}

export interface IJob {
  title: string;
  description?: string;
}

export interface IAppSliceState {
  user: IUser;
  jobs: Record<string, IJob>;
}

export interface IAppSliceAction {
  resetAppSlice: () => void;
  setUser: (payload: IUser) => void;
  resetJobs: () => void;
  addJob: (name: string, job: IJob) => void;
  removeJob: (name: string) => void;
}

