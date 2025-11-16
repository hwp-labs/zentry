export type PrimaryKeyType = string | number;

export interface BaseModel {
  id: PrimaryKeyType;
  createdAt: string;
  updatedAt?: string | null;
  deletedAt?: string | null;
}