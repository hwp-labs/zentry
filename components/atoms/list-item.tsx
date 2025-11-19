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
import { CalendarDaysIcon, Calendar1Icon, HomeIcon, PhoneIcon, SmartphoneIcon } from "lucide-react";

interface Props extends PropsWithChildren {
  avatar?: {
    src: string;
    text: string;
    size: number;
  };
  name: string;
  email: string;
  telephone: string;
}

export const ListItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-[72px] items-center gap-4">
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
};
