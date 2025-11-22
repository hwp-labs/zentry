import { useRouter } from "next/navigation";
import {
  ChevronLeftIcon,
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  LayoutGridIcon,
  PhoneCallIcon,
  PhoneIcon,
  SettingsIcon,
  BotMessageSquareIcon,
  InfoIcon,
  LifeBuoyIcon,
  Settings2Icon,
  LogInIcon,
  RssIcon,
  BugIcon,
} from "lucide-react";
import { Button } from "../shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../shadcn/ui/dropdown-menu";
import { AppAvatar } from "../atoms/app-avatar";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

interface Props {
  title?: string;
}

export const AppBar: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  //
  return (
    <header className="bg-brand px-4 shadow-lg">
      <div className="flex-center-between h-[60px] gap-2">
        {/* LEFT */}
        <figure className="flex items-center gap-2.5">
          {title ? (
            <>
              <ArrowLeftIcon
                size={24}
                color={COLOR.white}
                onClick={() => router.back()}
              />
              <p className="text-title-lg text-white">{title}</p>
            </>
          ) : (
            <>
              <AppAvatar src={"/logo.png"} alt="Z" />
              <figcaption className="text-title-lg text-white">
                {APP.name}
              </figcaption>
            </>
          )}
        </figure>

        {/* RIGHT */}
        {title ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="m-0 p-0">
              <EllipsisVerticalIcon size={24} color={COLOR.white} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 w-[160px]" align="end">
              <DropdownMenuItem className="h-[48px] gap-2 text-label-lg">
                <BugIcon size={24} />
                Tech Support
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="h-[48px] gap-2 text-label-lg">
                <LogInIcon size={24} />
                Sign in
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <AppAvatar src={"/images/my-avatar.png"} alt="U" />
        )}
      </div>
    </header>
  );
};
