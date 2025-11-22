"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import { AppBar } from "@/components/organisms/app-bar";
import { FormBuilder } from "@/components/molecules/form-builder";
import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
import { SelectInput } from "@/components/molecules/form-builder/ui/select-input";
import { YesNoEnum } from "@/core/enums/CommonEnum";
import { selectorUtil } from "@/utils/selector.util";
import { PATH } from "@/constants/PATH";

export default function MemberSurveyPage() {
  const router = useRouter();
  const handleBack = () => router.push(PATH.EditMember(1));
  const handleSave = () => {
    alert("Saved!");
    router.push(PATH.home);
  };
  //
  return (
    <>
      <AppBar title="Member survey" />
      <div className="container-fluid mt-4">
        <main className="scroll-view">
          <FormBuilder.Root
            title="Fill in the form details below"
            description=" fields are labeled with asterisk (*)"
          >
            <TextInput
              name="inviteeName"
              label="Q1. Who invited you to Jubilee Chapel?"
            />
            <TextInput
              name="inviteeDetails"
              type="tel"
              label="Q2. Phone number of whom invited you?"
            />
            <SelectInput
              name="inviteeIsMember"
              label="Q3. Is he/she a member of Jubilee Chapel?"
              data={selectorUtil.fromEnum(YesNoEnum)}
            />
            <SelectInput
              name="becomeAMember"
              label="Q4. Would you like to be a member of Jubilee Chapel?"
              data={selectorUtil.fromEnum(YesNoEnum)}
            />
            <SelectInput
              name="homeVisit"
              label="Q5. Would you like us to visit you?"
              data={selectorUtil.fromEnum(YesNoEnum)}
            />
            <TextInput
              name="homeVisitDetails"
              label="Q6. If yes, what day and time may we visit?"
            />
            {/* <FormBuilder.GridWithLabel label="Q6. If yes, what date and time will be convenient?">
              <TextInput
                name="homeVisitDetails"
                type="date"
                placeholder="Date"
              />
              <TextInput
                name="homeVisitDetails"
                type="time"
                placeholder="Time"
              />
            </FormBuilder.GridWithLabel> */}
            <SelectInput
              name="needCounseling"
              label="Q7. Do you need counseling?"
              data={selectorUtil.fromEnum(YesNoEnum)}
            />
            <TextInput
              name="prayerRequest"
              type="textarea"
              label="Q8. Any prayer requests?"
            />
            <TextInput
              name="serviceLikes"
              type="textarea"
              label="Q9. What did you like about today's service?"
            />
            <TextInput
              name="serviceDislikes"
              type="textarea"
              label="Q10. What did you dislike about today's service?"
            />
          </FormBuilder.Root>
        </main>
        <footer className="flex-center-end content-fluid fixed bottom-0 flex gap-4 border-t bg-white p-4">
          <Button onClick={handleBack} variant="outline">
            Back
          </Button>
          <Button onClick={handleSave} className="flex items-center gap-2">
            <CheckIcon size={24} />
            Save
          </Button>
        </footer>
      </div>
    </>
  );
}
