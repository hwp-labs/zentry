"use client";

// DOC: https://m3.material.io/components/chips/specs

import clsx from "clsx";
import { Badge } from "@/components/shadcn/ui/badge";
import { IconCheck } from "@tabler/icons-react";
import { SelectorProps } from "@/types/common.type";

interface Props extends SelectorProps {}

export const TagChips: React.FC<Props> = ({
  value,
  values,
  onChange = () => undefined,
  data = [],
}) => {
  return (
    <section className="horizontal-scroll gap-2.5 px-4">
      {data.map((item) => {
        const active = values
          ? values.includes(item.value)
          : value
            ? value == item.value
            : false;
        const checked = values && active;
        //
        return (
          <Badge
            key={item.value}
            onClick={() => onChange(item.value, item)}
            variant={active ? "default" : "outline"}
            className={clsx(
              "h-[32px] rounded-[8px] transition-colors",
              active && "bg-contrast",
              checked ? "gap-2 pr-4 pl-2" : "px-3",
            )}
          >
            {checked && <IconCheck size={18} />}
            <p className="text-label-lg">{item.label}</p>
          </Badge>
        );
      })}
    </section>
  );
};
