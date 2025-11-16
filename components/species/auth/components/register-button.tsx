"use client";

import { useRouter } from "next/navigation";
// 
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";

export const RegisterButton: React.FC = () => {
  const router = useRouter();
  // RENDER
  return (
    <Button
      type="button"
      className="bg-contrast"
      onClick={() => router.push(PATH.register)}
    >
      Create an account
    </Button>
  );
};
