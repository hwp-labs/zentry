import { BaseModel } from "./common/BaseModel";
import { DeviceValueObject } from "../value-objects/DeviceValueObject";
import { AccountStatusEnum } from "../enums/CommonEnum";

export interface UserModel extends BaseModel {
  avatarUrl?: string;
  name: string;
  email: string;
  telephone: string;
  password: string;
  role: UserRoleEnum;
  device?: DeviceValueObject;
  status: AccountStatusEnum;
}

export enum UserRoleEnum {
  USER = 'User',
  ADMIN = 'Admin',
}