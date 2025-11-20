import { HomeIcon, PhoneIcon } from "lucide-react";
import { ListItem } from "@/components/atoms/list-item";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";

interface Props {
  data?: MemberModel[];
}

export const HomeListContent: React.FC<Props> = ({ data = [] }) => {
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
