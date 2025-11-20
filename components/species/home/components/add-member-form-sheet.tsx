"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import {
  TextInput,
  TextInputV2,
} from "@/components/molecules/form-builder/ui/text-input";
import { SelectInput } from "@/components/molecules/form-builder/ui/select-input";
import {
  AgeRangeEnum,
  GenderEnum,
  MaritalStatusEnum,
  TitleEnum,
} from "@/core/models/MemberModel";
import { HouseEnum } from "@/core/enums/HouseEnum";
import { GroupEnum } from "@/core/enums/GroupEnum";
import { DepartmentEnum } from "@/core/enums/DepartmentEnum";
import { selectorUtil } from "@/utils/selector.util";
import { DAYS_IN_MONTH, MONTHS } from "@/constants/LANG";

interface Props {
  open: boolean;
  onChange: VoidFunction;
}

export const AddMemberFormSheet: React.FC<Props> = ({ open, onChange }) => {
  return (
    <Sheet open={open} onOpenChange={onChange}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Member</SheetTitle>
          <SheetDescription>
            Corel Ministry (A.K.A Jubilee Chapel HQ) Guest Bio Data Form
          </SheetDescription>
        </SheetHeader>
        <section className="grid h-[calc(100vh-200px)] flex-1 auto-rows-min gap-6 overflow-y-scroll px-4">
          <SelectInput
            name="title"
            label="Title"
            data={selectorUtil.fromEnum(TitleEnum)}
          />
          <div className="flex items-center gap-3">
            <TextInputV2
              name="surname"
              label="Surname*"
              placeholder="Family name"
            />
            <TextInputV2 type="search" name="otherNames" label="Other Names*" />
          </div>
          <div className="flex items-center gap-3">
            <SelectInput
              name="gender"
              label="Gender"
              data={selectorUtil.fromEnum(GenderEnum)}
            />
            <SelectInput
              name="ageRange"
              label="Age Range"
              data={selectorUtil.fromEnum(AgeRangeEnum)}
            />
          </div>
          <div className="flex items-center gap-3">
            <SelectInput
              name="birthDay"
              label="Day of Birth"
              data={selectorUtil.fromList(DAYS_IN_MONTH)}
            />
            <SelectInput
              name="birthMonth"
              label="Month of Birth"
              data={selectorUtil.fromList(MONTHS)}
            />
          </div>
          <div className="flex items-center gap-3">
            <SelectInput
              name="maritalStatus"
              label="Marital Status"
              data={selectorUtil.fromEnum(MaritalStatusEnum)}
            />
            <TextInputV2
              type="date"
              name="anniversaryDate"
              label="Anniversary Date"
            />
          </div>
          <div className="flex items-center gap-3">
            <TextInputV2
              type="tel"
              name="telephone1"
              label="Mobile Number*"
              placeholder="+234"
            />
            <TextInputV2
              type="tel"
              name="telephone2"
              label="Phone Number"
              placeholder="Second line"
            />
          </div>
          <TextInputV2
            type="email"
            name="email"
            label="Email Address"
            placeholder="Ex. person@domain.com"
          />
          <TextInputV2 type="search" name="homeAddress" label="Home Address" />
          <TextInputV2
            type="search"
            name="officeAddress"
            label="Office Address"
          />
          <TextInputV2
            name="occupation"
            label="Occupation"
            placeholder="Ex. Tailor, Student"
          />
          <div className="flex items-center gap-3">
            <SelectInput
              name="house"
              label="Church House"
              data={selectorUtil.fromEnum(HouseEnum)}
            />
            <SelectInput
              name="group"
              label="Church Group"
              data={selectorUtil.fromEnum(GroupEnum)}
            />
          </div>
          <SelectInput
            name="department"
            label="Church Department"
            data={selectorUtil.fromEnum(DepartmentEnum)}
          />
        </section>
        <SheetFooter>
          <Button type="submit">Save & Continue</Button>
          <Button variant="secondary">Clear</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
