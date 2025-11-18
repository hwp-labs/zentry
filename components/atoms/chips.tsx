"use client";

import clsx from "clsx";
import { Badge } from "@/components/shadcn/ui/badge";
import { Typography } from "./typography";

// DOC: https://m3.material.io/components/chips/specs
interface Props {
  data?: string[];
}

const Assist: React.FC<Props> = () => {
  return <></>;
};

const Filter: React.FC<Props> = ({ data = [] }) => {
  return (
    <section className="flex items-center gap-2.5 overflow-x-auto px-4 pb-2">
      {data.map((item, i) => {
        const firstChip = i === 0;
        return (
          <Badge
            key={i}
            variant={firstChip ? "default" : "outline"}
            className={clsx("h-[32px] rounded-[8px] px-4")}
          >
            <Typography.Small>{item}</Typography.Small>
          </Badge>
        );
      })}
    </section>
  );
};

const Input: React.FC<Props> = () => {
  return <></>;
};

const Suggestion: React.FC<Props> = () => {
  return <></>;
};

export const Chips = {
  Assist,
  Filter,
  Input,
  Suggestion,
};
