import { PrimaryKeyType } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";

export interface HouseMemberModel extends AuditableModel {
  houseId: PrimaryKeyType;
  memberId: PrimaryKeyType;
}