"use client";

import { useRouter } from "next/navigation";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const handleSend = () => router.push(PATH.ForgotPasswordOtp("token123"));
  const handleGoBack = () => router.push(PATH.login);
  //
  return (
    <AuthContainer
      title="Forgot password"
      description="Enter your email below to log in to your account"
    >
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input id="email" type="email" placeholder="Email" required />
          </Field>
          <Field className="grid gap-4">
            <Button type="button" onClick={handleSend} className="h-[40px]">
              Send
            </Button>
            <Button
              type="button"
              onClick={handleGoBack}
              variant="link"
              className="_h-[40px] debug_"
            >
              Go back
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthContainer>
  );
}
