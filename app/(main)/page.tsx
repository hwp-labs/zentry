import { PropsWithChildren } from "react";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { AppAvatar } from "@/components/atoms/app-avatar";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { FilterChips } from "@/components/atoms/chips/filter-chips";
import { Fab } from "@/components/organisms/fab";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import membersSeeder from "@/core/seeders/members-seeder.json";
import {
  CalendarDaysIcon,
  Calendar1Icon,
  HomeIcon,
  PhoneIcon,
  SmartphoneIcon,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <AppBar />
      <div className="container-fluid">
        <SearchBar />
        <FilterChips list={["All", "Favour", "Mercy", "Victory"]} />
        <section className="mt-4 h-[calc(100vh-200px)] overflow-y-scroll px-4">
          <ListGroup
            title="Today"
            badgeVariant="destructive"
            badgeText={3}
            icon={<Calendar1Icon size={20} />}
          >
            <ListContainer
              data={membersSeeder.slice(0, 3) as unknown as MemberModel[]}
            />
          </ListGroup>
          <ListGroup
            title="Upcoming"
            badgeText={7}
            icon={<CalendarDaysIcon size={20} />}
          >
            <ListContainer
              data={membersSeeder.slice(3) as unknown as MemberModel[]}
            />
          </ListGroup>
          <ListGroup
            title="This month"
            badgeText={10}
            icon={<CalendarDaysIcon size={20} />}
          >
            <ListContainer data={membersSeeder as unknown as MemberModel[]} />
          </ListGroup>
        </section>
      </div>
      <Fab variant="sm" />
    </>
  );
}

interface Props extends PropsWithChildren {
  title: string;
  badgeVariant?: "default" | "destructive" | "outline" | "secondary";
  badgeText?: string | number;
  icon?: React.ReactNode;
}

const ListGroup: React.FC<Props> = ({
  children,
  title,
  badgeVariant = "secondary",
  badgeText,
  icon,
}) => {
  return (
    <Accordion
      type="single"
      defaultValue="accordionItem1"
      collapsible
      className=""
    >
      <AccordionItem value="accordionItem1">
        <AccordionTrigger className="_debug-2 pt-0">
          <div className="flex items-center gap-2.5">
            {icon}
            <p className="text-title-md">{title}</p>
            <Badge variant={badgeVariant} className="font-medium">
              {badgeText}
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const ListContainer = ({ data = [] }: { data?: MemberModel[] }) => {
  return (
    <section className="">
      {data.map((item, i) => {
        const Item = new MemberPipe(item);
        //
        return (
          <div key={i} className="flex h-[72px] items-center gap-4">
            <AppAvatar src={item.avatarUrl} text={item.surname} size={40} />
            <div className="flex-1">
              <div className="flex-center-between">
                <p className="text-body-lg">{Item.DisplayName}</p>
                <p className="text-label-sm text-muted-foreground">
                  {Item.BirthDate}
                </p>
              </div>
              <p className="text-body-md text-muted-foreground flex items-center gap-2.5">
                <PhoneIcon size={16} />
                {item.telephone1}
                <HomeIcon size={16} />
                Favor
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
