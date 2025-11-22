import { PropsWithChildren } from "react";
import { FieldLabel } from "@/components/shadcn/ui/field";

interface Props extends PropsWithChildren {
  name?: string;
  required?: boolean;
}

export const InputLabel: React.FC<Props> = ({
  children,
  name = "",
  required,
}) => {
  return (
    <FieldLabel htmlFor={name}>
      {children}
      {required && <div className="text-destructive">*</div>}
    </FieldLabel>
  );
};
