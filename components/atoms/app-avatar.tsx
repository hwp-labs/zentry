import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { AVATAR_URL, NA } from "@/constants/STRINGS";

interface Props {
  src?: string | null;
  text?: string;
  size?: "sm" | "md" | "lg";
}

export const AppAvatar: React.FC<Props> = ({ src, text = NA, size = "sm" }) => {
  return (
    <Avatar
      className={clsx(
        "size-[32px]",
        size === "md" && "size-[48px]",
        size === "lg" && "size-[60px]",
      )}
    >
      <AvatarImage src={src || AVATAR_URL} alt="" />
      <AvatarFallback>{text.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
