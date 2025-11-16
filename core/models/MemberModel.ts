import { AuditableModel } from "./common/AuditableModel";
import { AddressValueObject } from "../value-objects/AddressValueObject";
import { DateValueObject } from "../value-objects/DateValueObject";

export interface MemberModel extends AuditableModel {
  avatarUrl?: string;
  surname: string;
  otherNames: string;
  gender?: GenderEnum | null;
  birthDate?: DateValueObject | null;
  email?: string;
  telephone1: string;
  telephone2?: string;
  address?: AddressValueObject | null;
  occupation?: string;
  maritalStatus?: MaritalStatusEnum | null;
  anniversaryDate?: DateValueObject | null;
  status: MemberStatusEnum;
}

export interface MemberUniqueKey {
  surname: string;
  otherNames: string;
  telephone1: string;
}

export enum GenderEnum {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export enum MaritalStatusEnum {
  SINGLE = 'Single',
  MARRIED = 'Married',
  SEPARATED = 'Separated',
  DIVORCED = 'Divorced',
  WIDOWED = 'Widowed',
}

export enum MemberStatusEnum {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}