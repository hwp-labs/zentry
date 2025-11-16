import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const Recommendations: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
