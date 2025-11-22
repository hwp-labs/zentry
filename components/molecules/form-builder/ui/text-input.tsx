"use client";

import { PropsWithChildren } from "react";
import { Field } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Textarea } from "@/components/shadcn/ui/textarea";
import { InputProps } from "@/types/common.type";
//
import { InputLabel } from "./input-label";

interface Props extends PropsWithChildren, InputProps {
  type?: string;
}

export const TextInput: React.FC<Props> = ({
  name,
  type = "text",
  label,
  placeholder,
  required,
}) => {
  return (
    <Field>
      {label ? (
        <InputLabel name={name} required={required}>
          {label}
        </InputLabel>
      ) : null}

      {type === "textarea" ? (
        <Textarea
          id={name}
          placeholder={placeholder}
          required={required}
          className="resize-none"
        />
      ) : (
        <Input
          type={type}
          id={name}
          placeholder={placeholder}
          required={required}
        />
      )}
    </Field>
  );
};
