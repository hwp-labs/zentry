"use client"

import { PropsWithChildren } from "react";
import clsx from "clsx";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  debug?: boolean;
}

export const Clickable: React.FC<Props> = ({
  children,
  onClick = () => undefined,
  debug,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx("dim-48 flex-center-center", debug && "debug")}
    >
      {children}
    </button>
  );
};
