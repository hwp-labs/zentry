import { StateCreator } from 'zustand';
import { DateType } from "@/types/common.type";
import { IFilterSliceState, IFilterSliceAction } from './types';

export interface IFilterSlice extends IFilterSliceState, IFilterSliceAction { }

const initialState: IFilterSliceState = {
  searchText: '',
  filterBy: '',
  sortBy: '',
  orderBy: 0,
  pages: 0,
  page: 0,
  pageLimit: 0,
  dateInterval: 0,
  startDate: null,
  startDateStr: '',
  endDate: null,
  endDateStr: '',
  dateRange: [null, null],
  minPrice: 0,
  minPriceStr: '',
  maxPrice: 0,
  maxPriceStr: '',
  priceRange: [0, 0],
  step: 0,
  subStep: 0,
  tab: 0,
  subTab: 0,
  isOpen: false,
};

export const filterSlice: StateCreator<IFilterSlice> = (set) => ({
  ...initialState,

  resetFilterSlice: (payload?: IFilterSliceState) => set({ ...payload ?? initialState }),

  setSearchText: (payload: string) => set({ searchText: payload }),

  setFilterBy: (payload: string) => set({ filterBy: payload }),

  setSortBy: (payload: string) => set({ sortBy: payload }),

  setOrderBy: (payload: number) => set({ orderBy: payload }),

  setPages: (payload: number) => set({ pages: payload }),

  setPage: (payload: number) => set({ page: payload }),

  setPageLimit: (payload: number) => set({ pageLimit: payload }),

  setDateInterval: (payload: number) => set({ dateInterval: payload }),

  setStartDate: (payload: DateType) => set((s) => ({
    startDate: payload,
    startDateStr: payload ? payload.toISOString().slice(0, 10) : '',
    dateRange: [payload, s.endDate]
  })),

  setEndDate: (payload: DateType) => set((s) => ({
    endDate: payload,
    endDateStr: payload ? payload.toISOString().slice(0, 10) : '',
    dateRange: [s.startDate, payload]
  })),

  setMinPrice: (payload: number) => set((s) => ({
    minPrice: payload,
    minPriceStr: payload.toLocaleString(),
    priceRange: [payload, s.maxPrice]
  })),

  setMaxPrice: (payload: number) => set((s) => ({
    maxPrice: payload,
    maxPriceStr: payload.toLocaleString(),
    priceRange: [s.minPrice, payload]
  })),

  setStep: (step: number, subStep?: number) => set(
    subStep ? { step: step, subStep: subStep } : { step: step }
  ),

  setSubStep: (payload: number) => set({ subStep: payload }),

  setTab: (tab: number, subTab?: number) => set(
    subTab ? { tab: tab, subTab: subTab } : { tab: tab }
  ),

  setSubTab: (payload: number) => set({ subTab: payload }),

  setIsOpen: (payload: boolean) => set({ isOpen: payload }),

  toggleIsOpen: () => set((s) => ({ isOpen: !s.isOpen })),
});