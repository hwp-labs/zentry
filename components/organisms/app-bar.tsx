import { useRouter } from "next/navigation";
import {
  ChevronLeftIcon,
  ArrowLeftIcon,
  EllipsisVerticalIcon,
  LayoutGridIcon,
} from "lucide-react";
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
              <AppAvatar src={"/logo.png"} text="Z" />
              <figcaption className="text-title-lg text-white">
                {APP.name}
              </figcaption>
            </>
          )}
        </figure>
        {title ? (
          <EllipsisVerticalIcon size={24} color={COLOR.white} />
        ) : (
          <AppAvatar src={"/images/my-avatar.png"} text="U" />
        )}
      </div>
    </header>
  );
};
