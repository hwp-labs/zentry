import { PropsWithChildren } from "react";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { Typography } from "@/components/atoms/typography";
import { AppAvatar } from "@/components/atoms/app-avatar";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { FilterChips } from "@/components/atoms/chips/filter-chips";
import { Fab } from "@/components/organisms/fab";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import membersSeeder from "@/core/seeders/members-seeder.json";

export default function HomePage() {
  return (
    <div className="">
      <AppBar />
      <SearchBar />
      <FilterChips list={["All", "Favour", "Mercy", "Victory"]} />
      <section className="mt-4 px-4">
        <ListGroup title="Today" badgeVariant="destructive" badgeText={9}>
          <ListContainer />
        </ListGroup>
        <ListGroup title="Upcoming" badgeText={15}>
          <ListContainer />
        </ListGroup>
      </section>
      <Fab variant="md" />
    </div>
  );
}

interface Props extends PropsWithChildren {
  title: string;
  badgeVariant?: "default" | "destructive" | "outline" | "secondary";
  badgeText?: string | number;
}

const ListGroup: React.FC<Props> = ({
  children,
  title,
  badgeVariant = "secondary",
  badgeText,
}) => {
  return (
    <Accordion
      type="single"
      defaultValue="accordionItem1"
      collapsible
      className=""
    >
      <AccordionItem value="accordionItem1">
        <AccordionTrigger className="py-0 pb-2">
          <div className="flex items-center gap-2">
            <Typography.Large>{title}</Typography.Large>
            <Badge variant={badgeVariant}>{badgeText}</Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const ListContainer = () => {
  return (
    <section className="">
      {(membersSeeder as unknown as MemberModel[]).map((item, i) => {
        const Item = new MemberPipe(item);
        //
        return (
          <div key={i} className="flex items-center gap-4 h-[72px]">
            <AppAvatar src={item.avatarUrl} text={item.surname} size={40}/>
            <div className="flex-1">
              <div className="flex-center-between">
                <p className="text-body-lg">{Item.DisplayName}</p>
                <p className="text-label-sm text-muted-foreground">{Item.BirthDate}</p>
              </div>
              <p className="text-body-md text-muted-foreground">{item.telephone1}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
