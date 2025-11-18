import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { AVATAR_URL, NA } from "@/constants/STRINGS";

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
      <AvatarImage src={src || AVATAR_URL} alt="" />
      <AvatarFallback>{text.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
