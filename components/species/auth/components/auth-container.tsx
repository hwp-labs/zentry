import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { FieldDescription } from "@/components/shadcn/ui/field";
import { APP } from "@/constants/APP";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title?: string;
  description?: string;
}

export const AuthContainer: React.FC<Props> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <div className="grid gap-6 bg-white p-6 sm:mt-10 sm:rounded-lg sm:p-8 sm:shadow-md">
        <CardHeader className="text-center">
          {!!title && <CardTitle className="text-xl">{title}</CardTitle>}
          {!!description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <main>{children}</main>
      </div>
      <FieldDescription
        className="px-6 pb-6 text-center"
        dangerouslySetInnerHTML={{ __html: APP.copyright }}
      />
    </>
  );
};
