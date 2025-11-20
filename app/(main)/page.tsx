"use client";

import { useState } from "react";
import { CalendarDaysIcon, Calendar1Icon } from "lucide-react";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { FilterChips } from "@/components/atoms/chips/filter-chips";
import { Fab } from "@/components/organisms/fab";
import { ListAccordion } from "@/components/atoms/list-accordion";
import { MemberModel } from "@/core/models/MemberModel";
import { selectorUtil } from "@/utils/selector.util";
import membersSeeder from "@/core/seeders/members-seeder.json";
// 
import { HomeListContent } from "@/components/species/home/components/home-list-content";
import { AddMemberFormSheet } from "@/components/species/home/components/add-member-form-sheet";

export default function HomePage() {
  const [openAddMemberSheet, setOpenAddMemberSheet] = useState(false);
  const toggleAddMemberSheet = () => {
    setOpenAddMemberSheet((prev) => !prev);
  };
  //
  return (
    <>
      <AppBar />
      <div className="container-fluid">
        <SearchBar />
        <FilterChips
          data={selectorUtil.fromList(["All", "Favour", "Mercy", "Victory"])}
        />
        <main className="mt-4 h-[calc(100vh-200px)] overflow-y-scroll px-4">
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
      <AddMemberFormSheet
        open={openAddMemberSheet}
        onChange={toggleAddMemberSheet}
      />
      <Fab onClick={toggleAddMemberSheet} />
    </>
  );
}
