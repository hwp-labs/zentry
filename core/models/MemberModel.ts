import { AuditableModel } from "./common/AuditableModel";
import { AddressValueObject } from "../value-objects/AddressValueObject";
import { DateValueObject } from "../value-objects/DateValueObject";
import { AgeRangeEnum, GenderEnum, MaritalStatusEnum, AccountStatusEnum, PersonTitleEnum } from "../enums/CommonEnum";

type MemberUniqueKey = Pick<MemberModel, 'surname' | 'otherNames' | 'telephone1'>

export interface MemberModel extends AuditableModel {
  avatarUrl?: string;
  title?: PersonTitleEnum | null;
  surname: string;
  otherNames: string;
  gender?: GenderEnum | null;
  ageRange?: AgeRangeEnum | null;
  birthDate?: DateValueObject | null;
  maritalStatus?: MaritalStatusEnum | null;
  anniversaryDate?: DateValueObject | null;
  email?: string;
  telephone1: string;
  telephone2?: string;
  homeAddress?: AddressValueObject | null;
  officeAddress?: AddressValueObject | null;
  occupation?: string;
  status: AccountStatusEnum;
}
