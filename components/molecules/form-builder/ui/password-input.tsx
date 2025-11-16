"use client";

import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
//
import { Field, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
// 
import { FormBuilderInputProps } from "../types";

interface Props extends FormBuilderInputProps {
  labelRight?: React.ReactNode;
}

export const PasswordInput: React.FC<Props> = ({
  name,
  label,
  placeholder,
  labelRight,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  // RENDER
  return (
    <Field>
      {/* LABEL */}
      {label ? (
        <div className="flex items-center justify-between">
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
          {labelRight}
        </div>
      ) : null}
      {/* INPUT CONTAINER */}
      <div className="relative">
        {/* INPUT */}
        <Input
          type={showPassword ? "text" : "password"}
          id={name}
          placeholder={placeholder}
          required
        />
        {/* INPUT TYPE TOGGLE */}
        <button
          type="button"
          className="absolute top-2.5 right-3 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOffIcon className="size-4" />
          ) : (
            <EyeIcon className="size-4" />
          )}
        </button>
      </div>
    </Field>
  );
};
