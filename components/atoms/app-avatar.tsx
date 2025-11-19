import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { NA } from "@/constants/LANG";

interface Props {
  src?: string | null;
  text?: string;
  size?: number;
}

export const AppAvatar: React.FC<Props> = ({ src, text = NA, size = 32 }) => {
  const [width, height] = [size, size];
  //
  return (
    <Avatar style={{ width, height }}>
      {src ? <AvatarImage src={src} alt="" /> : null}
      <AvatarFallback className="text-title-md">{text.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
