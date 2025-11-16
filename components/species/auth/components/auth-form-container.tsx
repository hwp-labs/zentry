import { PropsWithChildren } from "react";
import { FieldGroup } from "@/components/shadcn/ui/field";

interface Props extends PropsWithChildren {
  h1?: string;
  p?: string;
}

export const AuthFormContainer: React.FC<Props> = ({ children, h1, p }) => {
  return (
    <form className="flex flex-col gap-6">
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          {/* HEADING */}
          {h1 ? <h1 className="text-2xl font-bold">{h1}</h1> : null}
          {/* PARAGRAPH */}
          {p ? (
            <p className="text-muted-foreground text-sm text-balance">{p}</p>
          ) : null}
        </div>
        {/* CONTENT */}
        {children}
      </FieldGroup>
    </form>
  );
};
