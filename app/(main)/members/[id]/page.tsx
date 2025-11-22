"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ChevronRightIcon,
  VenusAndMarsIcon,
  PhoneOutgoingIcon,
  CheckIcon,
  UserPenIcon,
  Calendar1Icon,
  Share2Icon,
  CopyIcon,
} from "lucide-react";
// 
import { Button } from "@/components/shadcn/ui/button";
import { AppBar } from "@/components/organisms/app-bar";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import { AvatarUploader } from "@/components/atoms/avatar-uploader";
import { COLOR } from "@/constants/COLOR";
import { PATH } from "@/constants/PATH";
import membersSeeder from "@/core/seeders/members-seeder.json";
//

const item = membersSeeder[0] as unknown as MemberModel;
const Item = new MemberPipe(item);

export default function MemberDetailsPage() {
  const router = useRouter();
  const handleEdit = () => router.push(PATH.createMember);
  const handleEditSurvey = () => router.push(PATH.MemberSurvey(1));
  //
  return (
    <>
      <AppBar title="Member details">
        <Share2Icon size={20} color={COLOR.white} />
      </AppBar>
      {/*  */}
      <div className="container-fluid grid gap-6 py-6">
        <main className="scroll-view">
          <AvatarUploader src="/images/my-avatar.png" />
          <section className="mt-4 flex flex-col items-center gap-2">
            <h2 className="text-title-md">{Item.DisplayName} (Mr.)</h2>
            <p className="text-body-lg flex items-center gap-2">
              <VenusAndMarsIcon size={16} />
              {item.gender}
              <Calendar1Icon size={16} />
              Sep 15
            </p>
            <div className="flex items-center gap-4">
              <Button
                onClick={handleEdit}
                className="mt-2 flex items-center gap-2 bg-green-600"
              >
                <PhoneOutgoingIcon size={10} />
                Call
              </Button>
              <Button
                onClick={handleEdit}
                className="mt-2 flex items-center gap-2"
              >
                <UserPenIcon size={24} />
                Edit
              </Button>
            </div>
          </section>

          <section className="mt-4">
            <ListItem
              label="Age Range"
              value="Between 30 - 39"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
            <ListItem
              label="Marital Status"
              value="Married - Dec 2nd"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
            <ListItem
              label="Telephone Number(s)"
              value="+2348169960927, 07066157335"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
              canCopy
            />
            <ListItem
              label="Email Address"
              value="etugbeh@outlook.com"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
              canCopy
            />
            <ListItem
              label="Home Address"
              value="Oluwashola Cottage, Jubilee St., Evbukhu, Sapele Rd., B/c, Edo"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
              canCopy
            />
            <ListItem
              label="Office Address"
              value="N/A"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
            <ListItem
              label="Occupation"
              value="Website & Mobile App Developer"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
            <ListItem
              label="Church House(s)"
              value="Favour"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
            <ListItem
              label="Church Group(s)"
              value="Group 2, Men"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
            <ListItem
              label="Church Department(s)"
              value="Programs Arm, Media, ICT"
              icon={<VenusAndMarsIcon size={24} className="text-contrast" />}
            />
          </section>
        </main>
        <footer className="content-fluid px-4 grid">
          <Button onClick={handleEditSurvey} variant="secondary" className="_w-full h-[48px] text-primary">
            View survey
          </Button>
        </footer>
      </div>
    </>
  );
}

interface ListItemProps {
  label: string;
  value?: string | null;
  icon: React.ReactNode;
  canCopy?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  label,
  value,
  icon,
  canCopy,
}) => {
  return (
    <div className="flex-start-between gap-4 border-b p-2.5">
      <div className="mt-2">{icon}</div>
      <div className="flex-center-between flex-1">
        <div className="grid gap-1">
          <p className="text-body-md text-muted-foreground">{label}</p>
          <p className="text-body-md">{value}</p>
        </div>
        {canCopy && (
          <CopyIcon size={18} className="text-muted-foreground min-w-[18px]" />
        )}
      </div>
    </div>
  );
};
