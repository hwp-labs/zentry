import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  LogInIcon,
  BugIcon,
  LogOutIcon,
  Settings2Icon,
  ShieldUserIcon,
  SettingsIcon,
  CircleUserIcon,
  ServerIcon,
  HouseIcon,
} from "lucide-react";
//
import {
  DropdownMenuGroup,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../shadcn/ui/dropdown-menu";
import { AppAvatar } from "../atoms/app-avatar";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { PATH } from "@/constants/PATH";

interface Props extends PropsWithChildren {
  title?: string;
}

export const AppBar: React.FC<Props> = ({ children, title }) => {
  const router = useRouter();
  const gotoHome = () => router.push(PATH.home);
  const gotoSettings = () => router.push(PATH.dashboard);
  const gotoLogin = () => router.push(PATH.login);
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
          <div className="flex items-center gap-4">
            {children}
            <DropdownMenu>
              <DropdownMenuTrigger className="m-0 p-0">
                <EllipsisVerticalIcon size={24} color={COLOR.white} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 w-[160px]" align="end">
                <DropdownMenuItem
                  onClick={gotoHome}
                  className="text-label-lg h-[48px] gap-2"
                >
                  <HouseIcon size={24} />
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={gotoSettings}
                  className="text-label-lg h-[48px] gap-2"
                  disabled
                >
                  <SettingsIcon size={24} />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={gotoLogin}
                  className="text-label-lg h-[48px] gap-2"
                >
                  <LogInIcon size={24} />
                  Sign in
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="m-0 p-0">
              <AppAvatar src={"/images/my-avatar.png"} alt="U" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 w-[160px]" align="end">
              <DropdownMenuLabel className="flex items-center gap-2">
                {/* <CircleUserIcon className="max-w-[16px]" /> */}
                Hi, Emmanuel
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={gotoHome}
                  className="text-label-lg h-[48px] gap-2"
                >
                  <HouseIcon size={24} />
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={gotoSettings}
                  className="text-label-lg h-[48px] gap-2"
                >
                  <SettingsIcon size={24} />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={gotoLogin}
                  className="text-label-lg h-[48px] gap-2"
                >
                  <LogOutIcon size={24} />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};
