import { PrimaryKeyType } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";

export interface UserEventModel extends AuditableModel {
  userId: PrimaryKeyType;
  eventId: PrimaryKeyType;
}