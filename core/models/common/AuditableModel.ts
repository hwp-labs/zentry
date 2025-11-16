import { PrimaryKeyType, BaseModel } from "./BaseModel";

export interface AuditableModel extends BaseModel {
  createdBy?: PrimaryKeyType;
  updatedBy?: PrimaryKeyType;
  deletedBy?: PrimaryKeyType;
}