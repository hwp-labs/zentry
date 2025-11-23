"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon, PhoneOutgoingIcon } from "lucide-react";
// 
import { Button } from "@/components/shadcn/ui/button";
import { AppBar } from "@/components/organisms/app-bar";
import { FormBuilder } from "@/components/molecules/form-builder";
import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
import { SelectInput } from "@/components/molecules/form-builder/ui/select-input";
import { SelectMultipleInput } from "@/components/molecules/form-builder/ui/select-multiple-input";
import {
  AgeRangeEnum,
  GenderEnum,
  MaritalStatusEnum,
  PersonTitleEnum,
} from "@/core/enums/CommonEnum";
import { HouseEnum } from "@/core/enums/HouseEnum";
import { GroupEnum } from "@/core/enums/GroupEnum";
import { DepartmentEnum } from "@/core/enums/DepartmentEnum";
import { selectorUtil } from "@/utils/selector.util";
import { DAYS_IN_MONTH, MONTHS } from "@/constants/LANG";
import { AvatarUploader } from "@/components/atoms/avatar-uploader";
import { FieldSeparator } from "@/components/shadcn/ui/field";
import { PATH } from "@/constants/PATH";
import { COLOR } from "@/constants/COLOR";

export default function CreateMemberPage() {
  const router = useRouter();
  const handleClear = () => {
    if (confirm("Unsaved data will be lost")) {
      router.refresh();
    }
  };
  const handleFillSurvey = () => router.push(PATH.MemberSurvey(1));
  const handleSave = () => alert("Saved!");
  //
  return (
    <>
      <AppBar title="Add member"/>
      <div className="container-fluid mt-4">
        <main className="scroll-view">
          <FormBuilder.Root
            title="Fill in the form details below"
            description="Required fields are labeled with asterisk (*)"
          >
            <AvatarUploader />
            <TextInput
              name="surname"
              label="Surname"
              placeholder="Family name"
              required
            />
            <TextInput
              name="otherNames"
              type="search"
              label="Other Names"
              required
            />
            <FormBuilder.Grid>
              <SelectInput
                name="gender"
                label="Gender"
                data={selectorUtil.fromEnum(GenderEnum)}
              />
              <SelectInput
                name="title"
                label="Title"
                data={selectorUtil.fromEnum(PersonTitleEnum)}
              />
            </FormBuilder.Grid>
            <FormBuilder.Grid cols={3}>
              <SelectInput
                name="ageRange"
                label="Age Range"
                data={selectorUtil.fromEnum(AgeRangeEnum)}
              />
              <SelectInput
                name="birthDay"
                label="Day of Birth"
                placeholder="Day"
                data={selectorUtil.fromList(DAYS_IN_MONTH)}
              />
              <SelectInput
                name="birthMonth"
                label="Month of Birth"
                placeholder="Month"
                data={selectorUtil.fromList(MONTHS)}
              />
            </FormBuilder.Grid>
            <FormBuilder.Grid cols={3}>
              <SelectInput
                name="maritalStatus"
                label="Marital Status"
                data={selectorUtil.fromEnum(MaritalStatusEnum)}
              />
              <SelectInput
                name="anniversaryDay"
                label="Anniversary D..."
                placeholder="Day"
                data={selectorUtil.fromList(DAYS_IN_MONTH)}
              />
              <SelectInput
                name="anniversaryMonth"
                label="Anniversary M..."
                placeholder="Month"
                data={selectorUtil.fromList(MONTHS)}
              />
            </FormBuilder.Grid>
            <FormBuilder.Grid>
              <TextInput
                name="telephone1"
                type="tel"
                label="Mobile Number"
                placeholder="+234"
                required
              />
              <TextInput
                name="telephone2"
                type="tel"
                label="Office Number"
                placeholder="+1"
              />
            </FormBuilder.Grid>
            <TextInput
              name="email"
              type="email"
              label="Email Address"
              placeholder="Ex. person@domain.com"
            />
            <TextInput name="homeAddress" type="search" label="Home Address" />
            <TextInput
              type="search"
              name="officeAddress"
              label="Office Address"
            />
            <TextInput
              name="occupation"
              label="Occupation"
              placeholder="Ex. Tailor, Student"
            />
            <FieldSeparator />
            <FormBuilder.Grid>
              <SelectMultipleInput
                name="house"
                label="Church House"
                data={selectorUtil.fromEnum(HouseEnum)}
              />
              <SelectMultipleInput
                name="group"
                label="Church Group"
                data={selectorUtil.fromEnum(GroupEnum)}
              />
            </FormBuilder.Grid>
            <SelectMultipleInput
              name="department"
              label="Church Department"
              data={selectorUtil.fromEnum(DepartmentEnum)}
            />
            <TextInput type="date" name="dateCaptured" label="Date Joined" />
          </FormBuilder.Root>
        </main>
        <footer className="flex-center-between content-fluid fixed bottom-0 flex gap-4 border-t bg-white p-4">
          <Button onClick={handleClear} variant="secondary">
            Clear
          </Button>
          <div className="flex items-center gap-4">
            <Button onClick={handleFillSurvey} variant="link">
              Fill Survey
            </Button>
            <Button onClick={handleSave} className="flex items-center gap-2">
              <CheckIcon size={24} />
              Save
            </Button>
          </div>
        </footer>
      </div>
    </>
  );
}
