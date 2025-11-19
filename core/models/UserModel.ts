import { BaseModel } from "./common/BaseModel";
import { DeviceValueObject } from "../value-objects/DeviceValueObject";

export interface UserModel extends BaseModel {
  avatarUrl?: string;
  name: string;
  email: string;
  telephone: string;
  password: string;
  role: UserRoleEnum;
  device?: DeviceValueObject;
  status: UserStatusEnum;
}

export enum UserStatusEnum {
  ACTIVE = 'Active',
  SUSPENDED = 'Suspended',
}

export enum UserRoleEnum {
  USER = 'User',
  ADMIN = 'Admin',
}