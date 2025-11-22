import { AuditableModel } from "./common/AuditableModel";

export interface ListModel extends AuditableModel {
  name: string;
}

export interface ListItemModel extends AuditableModel {
  listId: string;
  name: string;
}