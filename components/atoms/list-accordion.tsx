import { PropsWithChildren } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion";
import { Badge } from "@/components/shadcn/ui/badge";
import { BadgeVariant } from "@/types/shadcn.type";

interface Props extends PropsWithChildren {
  title: string;
  badgeVariant?: BadgeVariant;
  badgeText?: string | number;
  leftIcon?: React.ReactNode;
}

export const ListAccordion: React.FC<Props> = ({
  children,
  title,
  leftIcon,
  badgeVariant = "secondary",
  badgeText,
}) => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="accordionItem"
      className=""
    >
      <AccordionItem value="accordionItem">
        <AccordionTrigger className="pt-0">
          <div className="flex items-center gap-2.5">
            {/* ICON */}
            {leftIcon}
            {/* TEXT */}
            <p className="text-title-md">{title}</p>
            {/* BADGE */}
            {badgeText ? (
              <Badge variant={badgeVariant} className="font-medium">
                {badgeText}
              </Badge>
            ) : null}
          </div>
        </AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
