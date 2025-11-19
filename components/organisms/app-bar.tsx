import { AppAvatar } from "../atoms/app-avatar";
import { APP } from "@/constants/APP";

export const AppBar = () => {
  return (
    <header className="bg-brand px-4 shadow-lg">
      <div className="flex-center-between h-[60px] gap-2">
        <figure className="flex items-center gap-2.5">
          <AppAvatar src={"/logo.png"} text="Z" />
          <figcaption className="text-title-lg text-white">{APP.name}</figcaption>
        </figure>
        <AppAvatar src={"/images/my-avatar.png"} text="U" />
      </div>
    </header>
  );
};
