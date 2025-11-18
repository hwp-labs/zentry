import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { Typography } from "../atoms/typography";
import { Clickable } from "../atoms/clickable";
import { APP } from "@/constants/APP";

export const AppBar = () => {
  return (
    <header className="border-b px-4">
      <div className="flex-center-between h-[60px] gap-2">
        <figure className="flex items-center gap-2">
          {/* <Image src="/icon.png" width={48} height={48} alt="" /> */}
          <Typography.H1 c="brand">{APP.name}</Typography.H1>
        </figure>
        <Clickable>
          <Avatar className="size-[32px]">
            <AvatarImage src="https://github.com/2gbeh.png" alt="" />
            <AvatarFallback>E</AvatarFallback>
          </Avatar>
        </Clickable>
      </div>
    </header>
  );
};
