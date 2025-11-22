import { CameraIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { COLOR } from "@/constants/COLOR";

interface Props {
  src?: Blob | string | null;
}

const SIZE = 100;

export const AvatarUploader: React.FC<Props> = ({ src }) => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <Avatar style={{ width: SIZE, height: SIZE }}>
          <AvatarImage src={src || "/images/avatar-2d.png"} alt="" />
          <AvatarFallback className="text-title-md"></AvatarFallback>
        </Avatar>
        <div className="flex-center-center bg-contrast border-2 absolute right-0 bottom-1 size-[32px] rounded-full border-white">
          <CameraIcon size={16} color={COLOR.white} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
