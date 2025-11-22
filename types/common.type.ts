export type ListType = string[]

export type SeriesType = number[]

export type DateType = Date | null

export type DateStringType = Date | string | null

export type FileType = File | null

export type FileBlobType = File | Blob | null

export type RecordType<T = unknown> = Record<string, T>

export type EnumType = Record<string, string | number>

export type NormalizedRecordType<T = unknown> = Record<number, T>

export type OptionType<T = RecordType> = {
  value: string,
  label: string,
  disabled?: boolean,
  item?: T,
}

export type OptionListType = OptionType[]

export type CollectionType<T = RecordType> = T[]

export type ModelType = {
  id?: number | string;
  name?: string;
  title?: string;
}

export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface SelectorProps {
  value?: string;
  values?: ListType;
  onChange?: (value: string, option?: RecordType) => void;
  data?: OptionListType;
}