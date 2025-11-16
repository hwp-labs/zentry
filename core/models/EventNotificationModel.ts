import { PrimaryKeyType } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";

export interface EventNotificationModel extends AuditableModel {
  eventId: PrimaryKeyType;
  memberId: PrimaryKeyType;
}