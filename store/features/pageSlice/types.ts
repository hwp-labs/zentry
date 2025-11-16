import { RecordType } from "@/types/common.type";

export interface IPageSliceState {
  path: string;
  id: number;
  uuid: string;
  q: string;
  context: RecordType;
}

export interface IPageSliceAction {
  resetPageSlice: () => void;
  setPath: (payload: string) => void;
  setId: (payload: number) => void;
  setUuid: (payload: string) => void;
  setQ: (payload: string) => void;
  setContext: (payload: Partial<RecordType>) => void;
}