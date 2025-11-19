import { AppAvatar } from "../atoms/app-avatar";
import { Clickable } from "../atoms/clickable";
import { Typography } from "../atoms/typography";
import { APP } from "@/constants/APP";
import { LOGO_URL } from "@/constants/LANG";

export const AppBar = () => {
  return (
    <header className="bg-brand px-4 shadow-lg">
      <div className="flex-center-between h-[60px] gap-2">
        <figure className="flex items-center gap-2.5">
          <AppAvatar src={LOGO_URL} text="U" />
          <Typography.H2 c="white">{APP.name}</Typography.H2>
        </figure>
        <Clickable>
          <AppAvatar src={"/images/my-avatar.png"} text="U" />
        </Clickable>
      </div>
    </header>
  );
};
