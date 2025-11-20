import { ListType, SeriesType, EnumType, ModelType } from "@/types/common.type";

function fromList(arr: ListType | SeriesType) {
  return arr.map((item, i) => ({
    value: String(i),
    label: String(item),
  }));
}

function fromEnum(obj: EnumType) {
  return Object.entries(obj).map(([key, value]) => ({ value: key, label: String(value), }));
}

function fromCollection(arr: ModelType[]) {
  return arr.map(({ id, name }) => ({
    value: String(id),
    label: name,
  }));
}

function fromCollectionWithTitle(arr: ModelType[]) {
  return arr.map(({ id, title }) => ({
    value: String(id),
    label: title,
  }));
}

export const selectorUtil = {
  fromList,
  fromEnum,
  fromCollection,
  fromCollectionWithTitle,
}