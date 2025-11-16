import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Hero: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
