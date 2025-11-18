import { BaseModel } from "../models/common/BaseModel";
import { dateUtil } from "@/utils/date.util";
import { NA } from "@/constants/STRINGS";

export class BasePipe {
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