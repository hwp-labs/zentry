import { Field, FieldLabel } from "@/components/shadcn/ui/field";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
//
import { FormBuilderInputProps } from "../types";

interface Props extends FormBuilderInputProps {}

export const TextInput: React.FC<Props> = ({
  name,
  type = "text",
  label,
  placeholder,
  required,
}) => {
  return (
    <Field>
      {/* LABEL */}
      {label ? (
        <div className="flex items-center">
          <FieldLabel htmlFor={name}>{label}</FieldLabel>
        </div>
      ) : null}
      {/* INPUT */}
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        required={required}
      />
    </Field>
  );
};

export const TextInputV2: React.FC<Props> = ({
  name,
  type = "text",
  label,
  placeholder,
  required,
}) => {
  return (
    <div className="grid gap-3">
      {label ? <Label htmlFor={name}>{label}</Label> : null}
      <Input type={type} id={name} placeholder={placeholder} required={required} />
    </div>
  );
};
