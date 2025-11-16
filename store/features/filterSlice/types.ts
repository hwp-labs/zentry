import { DateType } from "@/types/common.type";

export interface IFilterSliceState {
  searchText: string;
  filterBy: string;
  sortBy: string;
  orderBy: number;
  pages: number;
  page: number;
  pageLimit: number;
  dateInterval: number;
  startDate: DateType;
  startDateStr: string;
  endDate: DateType;
  endDateStr: string;
  dateRange: [DateType, DateType];
  minPrice: number;
  minPriceStr: string;
  maxPrice: number;
  maxPriceStr: string;
  priceRange: [number, number];
  step: number;
  subStep: number;
  tab: number;
  subTab: number;
  isOpen: boolean;
}

export interface IFilterSliceAction {
  resetFilterSlice: () => void;
  setSearchText: (payload: string) => void;
  setFilterBy: (payload: string) => void;
  setSortBy: (payload: string) => void;
  setOrderBy: (payload: number) => void;
  setPages: (payload: number) => void;
  setPage: (payload: number) => void;
  setPageLimit: (payload: number) => void;
  setDateInterval: (payload: number) => void;
  setStartDate: (payload: DateType) => void;
  setEndDate: (payload: DateType) => void;
  setMinPrice: (payload: number) => void;
  setMaxPrice: (payload: number) => void;
  setStep: (step: number, subStep?: number) => void;
  setSubStep: (payload: number) => void;
  setTab: (tab: number, subTab?: number) => void;
  setSubTab: (payload: number) => void;
  setIsOpen: (payload: boolean) => void;
  toggleIsOpen: (payload: boolean) => void;
}