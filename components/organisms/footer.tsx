import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const data = [
  "About Us",
  "Contact Us",
  "Locate Us",
  "Customer Feedback",
];

export const Footer: React.FC<Props> = ({ children }) => {
  return (
    <ul className="flex items-center gap-4 justify-center py-5">
      {data.map((item, i) => (
        <li key={i} className="text-muted-foreground text-sm text-balance">{item}</li>
      ))}
    </ul>
  );
};
