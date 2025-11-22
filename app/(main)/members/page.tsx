"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { Fab } from "@/components/organisms/fab";
import { MemberModel } from "@/core/models/MemberModel";
import { PATH } from "@/constants/PATH";
import membersSeeder from "@/core/seeders/members-seeder.json";
//
import { HomeListContent } from "@/components/species/home/components/home-list-content";
import { FilterChips } from "@/components/atoms/chips/filter-chips";
import { TagChips } from "@/components/atoms/chips/tag-chips";
import { selectorUtil } from "@/utils/selector.util";

export default function MembersPage() {
  const router = useRouter();
  const gotoAddMemberPage = () => router.push(PATH.createMember);
  //
  return (
    <>
      <AppBar title="All members" />
      <div className="container-fluid grid gap-6 pt-6">
        <SearchBar />

        <section className="horizontal-scroll gap-2.5 px-4">
          <FilterChips label="Sort by" />
          <FilterChips label="Group" />
          <FilterChips label="House" />
          <FilterChips label="Department" />
        </section>

        <TagChips
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
          <HomeListContent data={membersSeeder as unknown as MemberModel[]} />
        </main>
      </div>

      <Fab onClick={gotoAddMemberPage} />
    </>
  );
}
