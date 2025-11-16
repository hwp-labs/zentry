import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Example: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
