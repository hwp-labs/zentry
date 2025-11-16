"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
//
import { Button } from "@/components/shadcn/ui/button";

interface Props extends PropsWithChildren {
  href?: string;
}

export const SubmitButton: React.FC<Props> = ({ children, href }) => {
  const router = useRouter();
  const handleClick = () => (href ? router.push(href) : undefined);
  // RENDER
  return (
    <Button type={href ? "button" : "submit"} onClick={handleClick}>
      {children}
    </Button>
  );
};
