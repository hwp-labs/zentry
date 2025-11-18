"use client";

// DOC: https://m3.material.io/components/chips/specs

import clsx from "clsx";
import { Badge } from "@/components/shadcn/ui/badge";
import { IconCheck } from "@tabler/icons-react";

interface Props {
  list?: string[];
  selected?: number | number[];
  onChange?: (value: number) => void;
}

export const FilterChips: React.FC<Props> = ({
  list = [],
  selected = 0,
  onChange = () => undefined,
}) => {
  const multiple = typeof selected !== "number";
  //
  return (
    <section className="flex items-center gap-2.5 overflow-x-auto px-4 pb-2">
      {list.map((item, i) => {
        const active = multiple ? selected.includes(i) : i === selected;
        const checked = multiple && active;
        //
        return (
          <Badge
            key={i}
            onClick={() => onChange(i)}
            variant={active ? "default" : "outline"}
            className={clsx(
              "h-[32px] rounded-[8px] transition-colors",
              checked ? "gap-2 pr-4 pl-2" : "px-4",
            )}
          >
            {checked && <IconCheck size={18} />}
            <p className="text-sm font-medium tracking-wide">{item}</p>
          </Badge>
        );
      })}
    </section>
  );
};
