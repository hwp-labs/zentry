import { BaseModel } from "./common/BaseModel";
import { AuditableModel } from "./common/AuditableModel";
import { AddressValueObject } from "../value-objects/AddressValueObject";
import { DateValueObject } from "../value-objects/DateValueObject";
import { dateUtil } from "@/utils/date.util";
import { AVATAR_URL, NA } from "@/constants/STRINGS";
import { startCase } from "lodash";

export class BasePresenter {
  constructor(public __: BaseModel) { }

  get CreatedAt() {
    return dateUtil.longDate(this.__.createdAt);
  }

  get UpdatedAt() {
    if (!this.__.updatedAt) return NA
    return dateUtil.longDate(this.__.updatedAt);
  }

  get DeletedAt() {
    if (!this.__.deletedAt) return NA
    return dateUtil.longDate(this.__.deletedAt);
  }

  get IsDeleted() {
    return !!this.__.deletedAt;
  }
}

export class MemberPresenter extends BasePresenter {
  constructor(public __: MemberModel) {
    super(__);
  }

  get AvatarUrl() {
    return this.__.avatarUrl || AVATAR_URL;
  }

  get FullName() {
    return startCase(`${this.__.surname} ${this.__.otherNames}`);
  }

  get DisplayName() {
    return this.__.title ?
      startCase(`${this.__.title} ${this.__.surname} ${this.__.otherNames}`) :
      startCase(`${this.__.surname} ${this.__.otherNames}`);
  }

  get Initial() {
    return this.__.surname.toUpperCase().charAt(0);
  }

  get Initials() {
    const surname = this.__.surname.toUpperCase();
    const otherNames = this.__.otherNames.toUpperCase();
    return surname.charAt(0) + otherNames.charAt(0);
  }

  get BirthDate() {
    if (!this.__.birthDate) return NA;
    const day = this.__.birthDate.day
    const month = this.__.birthDate.month
    const dateVO = new DateValueObject(day, month).toString()
    return dateUtil.birthDate(dateVO);
  }

  get Anniversary() {
    if (!this.__.anniversaryDate) return NA;
    const day = this.__.anniversaryDate.day
    const month = this.__.anniversaryDate.month
    const dateVO = new DateValueObject(day, month).toString()
    return dateUtil.birthDate(dateVO);
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