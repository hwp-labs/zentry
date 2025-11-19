import {
  CalendarDaysIcon,
  Calendar1Icon,
  HomeIcon,
  PhoneIcon,
} from "lucide-react";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { FilterChips } from "@/components/atoms/chips/filter-chips";
import { Fab } from "@/components/organisms/fab";
import { ListItem } from "@/components/atoms/list-item";
import { ListAccordion } from "@/components/atoms/list-accordion";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import membersSeeder from "@/core/seeders/members-seeder.json";

export default function HomePage() {
  return (
    <>
      <AppBar />
      <div className="container-fluid">
        <SearchBar />
        <FilterChips list={["All", "Favour", "Mercy", "Victory"]} />
        <main className="mt-4 h-[calc(100vh-200px)] overflow-y-scroll px-4">
          <ListAccordion
            title="Today"
            badgeVariant="destructive"
            badgeText={3}
            leftIcon={<Calendar1Icon size={20} />}
          >
            <ListContent
              data={membersSeeder.slice(0, 3) as unknown as MemberModel[]}
            />
          </ListAccordion>
          <ListAccordion
            title="Upcoming"
            badgeText={7}
            leftIcon={<CalendarDaysIcon size={20} />}
          >
            <ListContent
              data={membersSeeder.slice(3) as unknown as MemberModel[]}
            />
          </ListAccordion>
          <ListAccordion
            title="This month"
            badgeText={10}
            leftIcon={<CalendarDaysIcon size={20} />}
          >
            <ListContent data={membersSeeder as unknown as MemberModel[]} />
          </ListAccordion>
        </main>
      </div>
      <Fab />
    </>
  );
}

const ListContent = ({ data = [] }: { data?: MemberModel[] }) => {
  return (
    <section className="">
      {data.map((item, i) => {
        const Item = new MemberPipe(item);
        //
        return (
          <ListItem
            key={i}
            avatarSrc={item.avatarUrl}
            avatarText={item.surname}
            text={Item.DisplayName}
            rightText={Item.BirthDate}
            description={
              <>
                <PhoneIcon size={16} />
                {item.telephone1}
                <HomeIcon size={16} />
                Favor
              </>
            }
          />
        );
      })}
    </section>
  );
};
