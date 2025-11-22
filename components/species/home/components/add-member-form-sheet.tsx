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
import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
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
import { AppAvatar } from "@/components/atoms/app-avatar";

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
        <section className="scroll-view grid flex-1 auto-rows-min gap-6">
          <AppAvatar size={128} src={null} text="E" />
          <SelectInput
            name="title"
            label="Title"
            data={selectorUtil.fromEnum(TitleEnum)}
          />
          <div className="flex items-center gap-3">
            <TextInput
              name="surname"
              label="Surname*"
              placeholder="Family name"
            />
            <TextInput type="search" name="otherNames" label="Other Names*" />
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
            <TextInput
              type="date"
              name="anniversaryDate"
              label="Anniversary Date"
            />
          </div>
          <div className="flex items-center gap-3">
            <TextInput
              type="tel"
              name="telephone1"
              label="Mobile Number*"
              placeholder="+234"
            />
            <TextInput
              type="tel"
              name="telephone2"
              label="Office Number"
              placeholder="Second line"
            />
          </div>
          <TextInput
            type="email"
            name="email"
            label="Email Address"
            placeholder="Ex. person@domain.com"
          />
          <TextInput type="search" name="homeAddress" label="Home Address" />
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

      <footer className="flex-center-between content-fluid fixed bottom-0 flex gap-4 border-t bg-white p-4">
        <Button variant="secondary">Clear</Button>
        <div className="flex items-center gap-4">
          <Button variant="link">Fill Survey</Button>
          <Button type="submit" className="flex items-center gap-2">
            {/* <PlusIcon size={24} /> */}
            Save
          </Button>
        </div>
      </footer>
    </Sheet>
  );
};
