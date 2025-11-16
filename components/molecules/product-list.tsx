import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

// https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
// https://pokeapi.co/api/v2/pokemon/ditto
export const ProductList: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};
