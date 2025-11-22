"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRightIcon, HomeIcon, PhoneIcon } from "lucide-react";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { Fab } from "@/components/organisms/fab";
import { Filter, FilterReset } from "@/components/atoms/filters";
import { ListBuilder } from "@/components/molecules/list-builder";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import { PATH } from "@/constants/PATH";
import membersSeeder from "@/core/seeders/members-seeder.json";
//

export default function MembersPage() {
  const router = useRouter();
  const gotoAddMemberPage = () => router.push(PATH.createMember);
  //
  return (
    <>
      <AppBar title="All members" />
      {/*  */}
      <div className="container-fluid grid gap-6 pt-6">
        <SearchBar />
        {/*  */}
        <section className="horizontal-scroll px-4">
          <FilterReset />
          <Filter label="Sort by" />
          <Filter label="Group" />
          <Filter label="House" />
          <Filter label="Department" />
        </section>
        {/*  */}
        <main className="scroll-view">
          <section className="">
            {(membersSeeder as unknown as MemberModel[]).map((item, i) => {
              const Item = new MemberPipe(item);
              //
              return (
                <ListBuilder.Container key={i}>
                  <ListBuilder.Avatar src={item.avatarUrl} alt={item.surname} />
                  <ListBuilder.Content>
                    <ListBuilder.Headline text={Item.DisplayName} />
                    <ListBuilder.Baseline>
                      <PhoneIcon size={16} />
                      {item.telephone1}
                      <HomeIcon size={16} />
                      Favor
                    </ListBuilder.Baseline>
                  </ListBuilder.Content>
                  <ChevronRightIcon
                    size={20}
                    className="text-muted-foreground"
                  />
                </ListBuilder.Container>
              );
            })}
          </section>
        </main>
      </div>
      {/*  */}
      <Fab onClick={gotoAddMemberPage} />
    </>
  );
}
