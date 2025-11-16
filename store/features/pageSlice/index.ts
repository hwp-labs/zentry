import { StateCreator } from 'zustand';
import { RecordType } from '@/types/common.type';
import { IPageSliceState, IPageSliceAction } from './types';

export interface IPageSlice extends IPageSliceState, IPageSliceAction {}

const initialState: IPageSliceState = {
  path: '',
  id: 0,
  uuid: '',
  q: '',
  context: {},
};

export const pageSlice: StateCreator<IPageSlice> = (set) => ({
  ...initialState,
 
  resetPageSlice: (payload?: IPageSliceState) => set({ ...payload ?? initialState }),
  
  setPath: (payload: string) => set({ path: payload }),
 
  setId: (payload: number) => set({ id: payload }),
 
  setUuid: (payload: string) => set({ uuid: payload }),
 
  setQ: (payload: string) => set({ q: payload }),

  setContext: (payload: Partial<RecordType>) => set((s) => ({ context: { ...s.context, ...payload } })),  
});