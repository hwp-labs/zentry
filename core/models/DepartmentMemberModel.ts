import { PrimaryKeyType } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";

export interface DepartmentMemberModel extends AuditableModel {
  departmentId: PrimaryKeyType;
  memberId: PrimaryKeyType;
}