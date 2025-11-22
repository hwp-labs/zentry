"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDaysIcon, Calendar1Icon } from "lucide-react";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { Fab } from "@/components/organisms/fab";
import { Filters } from "@/components/atoms/filters";
import { ListAccordion } from "@/components/molecules/list-builder/ui/list-accordion";
import { MemberModel } from "@/core/models/MemberModel";
import { selectorUtil } from "@/utils/selector.util";
import { PATH } from "@/constants/PATH";
import membersSeeder from "@/core/seeders/members-seeder.json";
//
import { HomeListContent } from "@/components/species/home/components/home-list-content";

export default function HomePage() {
  const router = useRouter();
  const gotoAddMemberPage = () => router.push(PATH.createMember);
  //
  return (
    <>
      <AppBar />
      <div className="container-fluid pt-6 grid gap-6">
        <SearchBar />

        <Filters
          value="0"
          data={selectorUtil.fromList([
            "All",
            "Favour",
            "Mercy",
            "Victory",
            "Men",
          ])}
        />

        <main className="scroll-view">
          <ListAccordion
            title="Today"
            badgeVariant="destructive"
            badgeText={3}
            leftIcon={<Calendar1Icon size={20} />}
          >
            <HomeListContent
              data={membersSeeder.slice(0, 3) as unknown as MemberModel[]}
            />
          </ListAccordion>
          <ListAccordion
            title="Upcoming"
            badgeText={7}
            leftIcon={<CalendarDaysIcon size={20} />}
          >
            <HomeListContent
              data={membersSeeder.slice(3) as unknown as MemberModel[]}
            />
          </ListAccordion>
          <ListAccordion
            title="This month"
            badgeText={10}
            leftIcon={<CalendarDaysIcon size={20} />}
          >
            <HomeListContent data={membersSeeder as unknown as MemberModel[]} />
          </ListAccordion>
        </main>
      </div>
      <Fab onClick={gotoAddMemberPage} />
    </>
  );
}
