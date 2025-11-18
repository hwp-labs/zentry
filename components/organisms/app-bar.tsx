import { AppAvatar } from "../atoms/app-avatar";
import { Clickable } from "../atoms/clickable";
import { Typography } from "../atoms/typography";
import { APP } from "@/constants/APP";

export const AppBar = () => {
  return (
    <header className="border-b px-4">
      <div className="flex-center-between h-[60px] gap-2">
        <figure className="flex items-center gap-2">
          {/* <Image src="/icon.png" width={48} height={48} alt="" /> */}
          <Typography.H2 c="brand">{APP.name}</Typography.H2>
        </figure>
        <Clickable>
          <AppAvatar src="https://github.com/2gbeh.png" text="E" />
        </Clickable>
      </div>
    </header>
  );
};
