import { startCase } from "lodash";
import { MemberModel } from "../models/MemberModel";
import { DateValueObject } from "../value-objects/DateValueObject";
import { BasePipe } from "./BasePipe";
import { dateUtil } from "@/utils/date.util";
import { NA } from "@/constants/LANG";

export class MemberPipe extends BasePipe {
  constructor(public __: MemberModel) {
    super(__);
  }

  get FullName() {
    return startCase(`${this.__.surname} ${this.__.otherNames}`);
  }

  get DisplayName() {
    return this.__.title ?
      startCase(`${this.__.title} ${this.__.surname} ${this.__.otherNames}`) :
      startCase(`${this.__.surname} ${this.__.otherNames}`);
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
