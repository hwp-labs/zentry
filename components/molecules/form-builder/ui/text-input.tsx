import { Field, FieldLabel } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
//
import { FormBuilderInputProps } from "../types";

interface Props extends FormBuilderInputProps {
}

export const TextInput: React.FC<Props> = ({
  name,
  type = "text",
  label,
  placeholder,
  required
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
      <Input type={type} id={name} placeholder={placeholder} required={required} />
    </Field>
  );
};
