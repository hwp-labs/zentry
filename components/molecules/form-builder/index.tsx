import { PropsWithChildren } from "react";
import clsx from "clsx";
import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";
import { InputLabel } from "./ui/input-label";

interface RootProps extends PropsWithChildren {
  title?: string;
  description?: string;
}

const Root: React.FC<RootProps> = ({ children, title, description }) => {
  return (
    <form>
      <FieldGroup>
        <FieldSet>
          {title ? <FieldLegend>{title}</FieldLegend> : null}
          {description ? (
            <FieldDescription>{description}</FieldDescription>
          ) : null}
          <FieldGroup>{children}</FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
};

interface GridProps extends PropsWithChildren {
  cols?: number;
}

const Grid: React.FC<GridProps> = ({ children, cols = 2 }) => (
  <div
    className={clsx("grid gap-4", {
      ["grid-cols-2"]: cols === 2,
      ["grid-cols-3"]: cols === 3,
      ["grid-cols-4"]: cols === 4,
    })}
  >
    {children}
  </div>
);

interface GridWithLabelProps extends GridProps {
  label?: string;
  required?: boolean;
}

const GridWithLabel: React.FC<GridWithLabelProps> = ({
  children,
  cols = 2,
  label,
  required,
}) => (
  <FieldGroup>
    <InputLabel required={required}>{label}</InputLabel>
    <div
      className={clsx("grid gap-4", {
        ["grid-cols-2"]: cols === 2,
        ["grid-cols-3"]: cols === 3,
        ["grid-cols-4"]: cols === 4,
      })}
    >
      {children}
    </div>
  </FieldGroup>
);

const Flex: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-start">{children}</div>
);

const FlexItem: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex-1">{children}</div>
);

export const FormBuilder = { Root, Grid, GridWithLabel, Flex, FlexItem };
