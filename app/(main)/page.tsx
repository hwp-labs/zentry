import { PropsWithChildren } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { Typography } from "@/components/atoms/typography";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { FilterChips } from "@/components/atoms/chips/filter-chips";
import membersSeeder from "@/core/seeders/members-seeder.json";
import { Fab } from "@/components/organisms/fab";

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
      <Fab />
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
    <section className="debug-3 flex flex-col gap-4">
      {membersSeeder.map((item, i) => {
        const firstChip = i === 0;
        return (
          <div key={i} className="debug flex items-center gap-2.5">
            <Avatar className="size-[32px]">
              <AvatarImage src="https://github.com/2gbeh.png" alt="" />
              <AvatarFallback>E</AvatarFallback>
            </Avatar>
            <div className="flex flex-1 flex-col">
              <div className="flex-center-between">
                <Typography.P>{item.otherNames}</Typography.P>
                <Typography.Small>{item.birthDate?.day}</Typography.Small>
              </div>
              <Typography.Small>{item.surname}</Typography.Small>
            </div>
          </div>
        );
      })}
    </section>
  );
};
