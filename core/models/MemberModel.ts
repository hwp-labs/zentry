import { BaseModel } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";
import { AddressValueObject } from "../value-objects/AddressValueObject";
import { DateValueObject } from "../value-objects/DateValueObject";

export class BasePresenter {
  constructor(public __: BaseModel) { }

  get CreatedAt() {
    return this.__.createdAt;
  }

  get UpdatedAt() {
    return this.__.updatedAt;
  }

  get DeletedAt() {
    return this.__.deletedAt;
  }

  get IsDeleted() {
    return !!this.__.deletedAt;
  }
}

export class MemberPresenter extends BasePresenter {
  constructor(public __: MemberModel) {
    super(__);
  }

  get DisplayName() {
    return this.__.title ?
      `${this.__.title} ${this.__.surname} ${this.__.otherNames}` :
      `${this.__.surname} ${this.__.otherNames}`;
  }
}

export interface MemberModel extends AuditableModel {
  avatarUrl?: string;
  title?: TitleEnum | null;
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