import clsx from "clsx";
import { COLOR } from "@/constants/COLOR";
import { PlusIcon } from "lucide-react";

interface Props {
  variant?: "sm" | "md" | "lg";
}

export const Fab: React.FC<Props> = ({ variant = "sm" }) => {
  const iconSize = { sm: 24, md: 28, lg: 36 }[variant];
  //
  return (
    <div
      className={clsx(
        "flex-center-center bg-brand fixed right-4 bottom-4 shadow",
        variant === "sm" && "size-[56px] rounded-[16px]",
        variant === "md" && "size-[80px] rounded-[20px]",
        variant === "lg" && "size-[96px] rounded-[28px]",
      )}
    >
      <PlusIcon size={iconSize} color={COLOR.white} />
    </div>
  );
};
