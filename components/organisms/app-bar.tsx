import { AppAvatar } from "../atoms/app-avatar";
import { Clickable } from "../atoms/clickable";
import { Typography } from "../atoms/typography";
import { APP } from "@/constants/APP";
import { TENANT_LOGO } from "@/constants/LANG";

export const AppBar = () => {
  return (
    <header className="bg-brand px-4 shadow-lg">
      <div className="flex-center-between h-[60px] gap-2">
        <figure className="flex items-center gap-2">
          {/* <Image src="/icon.png" width={48} height={48} alt="" /> */}
          <Typography.H2 c="white">{APP.name}</Typography.H2>
        </figure>
        <Clickable>
          <AppAvatar src={TENANT_LOGO} text="U" />
        </Clickable>
      </div>
    </header>
  );
};
