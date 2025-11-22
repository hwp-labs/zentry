import { AuditableModel } from "./common/AuditableModel";
import { PrimaryKeyType } from "./common/BaseModel";

export interface MemberSurveyModel extends AuditableModel {
  memberId: PrimaryKeyType;
  surveyId: PrimaryKeyType;
  answer: PrimaryKeyType;
  // 
  inviteeName?: string | null;
  inviteeDetails?: string | null;
  inviteeIsMember?: boolean;
  becomeAMember?: boolean;
  homeVisit?: boolean;
  homeVisitDetails?: string | null;
  needCounseling?: boolean;
  prayerRequest?: string | null;
  serviceLikes?: string | null;
  serviceDislikes?: string | null;
}

