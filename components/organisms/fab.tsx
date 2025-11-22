"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { PlusIcon } from "lucide-react";
import { COLOR } from "@/constants/COLOR";

interface Props extends PropsWithChildren {
  variant?: "sm" | "md" | "lg";
  onClick?: VoidFunction;
}

export const Fab: React.FC<Props> = ({ children, variant = "sm", onClick }) => {
  const iconSize = { sm: 24, md: 28, lg: 36 }[variant];
  //
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex-center-center bg-brand fixed right-4 bottom-4 shadow-lg",
        variant === "sm" && "size-[56px] rounded-[16px]",
        variant === "md" && "size-[80px] rounded-[20px]",
        variant === "lg" && "size-[96px] rounded-[28px]",
      )}
    >
      {children || <PlusIcon size={iconSize} color={COLOR.white} />}
    </div>
  );
};
