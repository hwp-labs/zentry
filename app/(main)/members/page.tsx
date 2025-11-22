"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDaysIcon, Calendar1Icon } from "lucide-react";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { Fab } from "@/components/organisms/fab";
import { ListAccordion } from "@/components/atoms/list-accordion";
import { MemberModel } from "@/core/models/MemberModel";
import { PATH } from "@/constants/PATH";
import membersSeeder from "@/core/seeders/members-seeder.json";
//
import { HomeListContent } from "@/components/species/home/components/home-list-content";

export default function MembersPage() {
  const router = useRouter();
  const gotoAddMemberPage = () => router.push(PATH.createMember);
  //
  return (
    <>
      <AppBar title="All members" />
      <div className="container-fluid">
        <SearchBar />
        <main className="scroll-view mt-4">
          <HomeListContent data={membersSeeder as unknown as MemberModel[]} />
        </main>
      </div>
      <Fab onClick={gotoAddMemberPage} />
    </>
  );
}
