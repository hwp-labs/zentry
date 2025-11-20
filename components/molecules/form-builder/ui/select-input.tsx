"use client";

import { PropsWithChildren } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { Label } from "@/components/shadcn/ui/label";
import { SelectorProps } from "@/types/common.type";

interface Props extends PropsWithChildren, SelectorProps {
  name?: string;
  label?: string;
  placeholder?: string;
}

export const SelectInput: React.FC<Props> = ({
  name = "selectInput",
  label,
  placeholder = "Choose one",
  value,
  onChange = () => undefined,
  data = [],
}) => {
  //
  return (
    <div className="grid gap-3">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Select>
        <SelectTrigger id={name} className="">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};