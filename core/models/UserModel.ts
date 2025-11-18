import { BaseModel } from "./common/BaseModel";
import { DeviceValueObject } from "../value-objects/DeviceValueObject";

export interface UserModel extends BaseModel {
  avatarUrl?: string;
  name: string;
  email: string;
  // password: string;
  role: UserRoleEnum;
  device?: DeviceValueObject;
}

export enum UserRoleEnum {
  USER = 'User',
  ADMIN = 'Admin',
}