import { AuditableModel } from "./common/AuditableModel";
import { AddressValueObject } from "../value-objects/AddressValueObject";
import { DateValueObject } from "../value-objects/DateValueObject";

type MemberUniqueKey = Pick<MemberModel, 'surname' | 'otherNames' | 'telephone1'>

export interface MemberModel extends AuditableModel {
  avatarUrl?: string;
  title?: TitleEnum | null;
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
  status: MemberStatusEnum;
}


export enum TitleEnum {
  MISTER = 'Mr.',
  MISSUS = 'Mrs.',
  MISS = 'Miss',
  MS = 'Ms.',
  DOCTOR = 'Dr.',
  PROFESSOR = 'Prof.',
  REVEREND = 'Rev.',
  PASTOR = 'Pastor',
  ELDER = 'Elder',
  DEACON = 'Deacon',
  DEACONESS = 'Deaconess',
  BROTHER = 'Bro.',
  SISTER = 'Sis.',
  HONORABLE = 'Hon.',
  SENATOR = 'Sen.',
  REPRESENTATIVE = 'Rep.',
  GOVERNOR = 'Gov.',
  AMBASSADOR = 'Amb.',
  CHIEF = 'Chief',
  HIS_ROYAL_HIGHNESS = 'HRH',
  HIS_ROYAL_MAJESTY = 'HRM'
}

export enum GenderEnum {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}

export enum AgeRangeEnum {
  AGE_13_17 = '13 - 17',
  AGE_18_29 = '18 -29',
  AGE_30_39 = '30 -39',
  AGE_40_ABOVE = '40 above'
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