"use client";

// DOC: https://m3.material.io/components/chips/specs

import clsx from "clsx";
import { ChevronDownIcon, CheckIcon } from "lucide-react";
import { Badge } from "@/components/shadcn/ui/badge";
import { SelectorProps } from "@/types/common.type";

interface FiltersProps extends SelectorProps {}

export const Filters: React.FC<FiltersProps> = ({
  value,
  values,
  onChange = () => undefined,
  data = [],
}) => {
  return (
    <section className="horizontal-scroll px-4">
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
            {checked && <CheckIcon size={18} />}
            <p className="text-label-lg">{item.label}</p>
          </Badge>
        );
      })}
    </section>
  );
};

interface FilterProps {
  label: string;
}

export const Filter: React.FC<FilterProps> = ({ label }) => {
  return (
    <Badge
      variant={"outline"}
      className="h-[32px] rounded-[8px] transition-colors gap-2 pl-3"
    >
      <p className="text-label-lg">{label}</p>
      <ChevronDownIcon size={18}/>
    </Badge>
  );
};