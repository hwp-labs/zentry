import { HomeIcon, PhoneIcon, ChevronRightIcon } from "lucide-react";
import { MemberModel } from "@/core/models/MemberModel";
import { MemberPipe } from "@/core/pipes/MemberPipe";
import { ListBuilder } from "@/components/molecules/list-builder";

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
          <ListBuilder.Container key={i}>
            <ListBuilder.Avatar src={item.avatarUrl} alt={item.surname} />
            <ListBuilder.Content>
              <ListBuilder.Headline
                text={Item.DisplayName}
                subtext={Item.BirthDate}
              />
              <ListBuilder.Baseline>
                <PhoneIcon size={16} />
                {item.telephone1}
                <HomeIcon size={16} />
                Favor
              </ListBuilder.Baseline>
            </ListBuilder.Content>
          </ListBuilder.Container>
        );
      })}
    </section>
  );
};
