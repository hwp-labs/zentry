"use client";

import { useRouter } from "next/navigation";
import {
  HomeIcon,
  PhoneOutgoingIcon,
  ChevronRightIcon,
  Calendar1Icon,
} from "lucide-react";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import { ListBuilder } from "@/components/molecules/list-builder";
import { randomAvatarUrlBySex } from "@/utils/common.util";
import { PATH } from "@/constants/PATH";

interface Props {
  data?: MemberModel[];
}

export const HomeListContent: React.FC<Props> = ({ data = [] }) => {
  const router = useRouter();
  const gotoMemberDetailsPage = (id: unknown) =>
    router.push(PATH.MemberDetails(id));
  //
  return (
    <section className="">
      {data.map((item, i) => {
        const Item = new MemberPipe(item);
        const avatarUrl = randomAvatarUrlBySex(item.gender || "Female");
        //
        return (
          <ListBuilder.Container
            key={i}
            onClick={() => gotoMemberDetailsPage(item.id)}
          >
            <ListBuilder.Avatar src={avatarUrl} alt={item.surname} />
            <ListBuilder.Content>
              <ListBuilder.Headline text={Item.DisplayName} />
              <ListBuilder.Baseline>
                <PhoneOutgoingIcon size={14} />
                {item.telephone1}
                <Calendar1Icon size={16} />
                {Item.BirthDate}
              </ListBuilder.Baseline>
            </ListBuilder.Content>
            <ChevronRightIcon size={20} className="text-muted-foreground" />
          </ListBuilder.Container>
        );
      })}
    </section>
  );
};
