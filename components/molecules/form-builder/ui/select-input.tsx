"use client";

import { PropsWithChildren } from "react";
import { Field } from "@/components/shadcn/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { InputProps, SelectorProps } from "@/types/common.type";
//
import { InputLabel } from "./input-label";

interface Props extends PropsWithChildren, InputProps, SelectorProps {}

export const SelectInput: React.FC<Props> = ({
  name,
  label,
  placeholder,
  defaultValue,
  data = [],
  required,
}) => {
  return (
    <Field>
      {label ? (
        <InputLabel name={name} required={required}>
          {label}
        </InputLabel>
      ) : null}

      <Select defaultValue={defaultValue}>
        <SelectTrigger id={name} className="w-full">
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
    </Field>
  );
};
