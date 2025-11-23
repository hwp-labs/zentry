import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { COLOR } from "@/constants/COLOR";
import { NA } from "@/constants/LANG";

interface Props {
  src?: string | null;
  alt?: string;
  size?: number;
}

export const AppAvatar: React.FC<Props> = ({ src, alt = NA, size = 32 }) => {
  const [width, height] = [size, size];
  //
  return (
    <Avatar
      className="border"
      style={{ width, height, background: COLOR.brand_20 }}
    >
      {src ? <AvatarImage src={src} alt="" /> : null}
      <AvatarFallback className="text-title-md">
        {alt.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
