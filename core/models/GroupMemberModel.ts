import { PrimaryKeyType } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";

export interface GroupMemberModel extends AuditableModel {
  groupId: PrimaryKeyType;
  memberId: PrimaryKeyType;
}