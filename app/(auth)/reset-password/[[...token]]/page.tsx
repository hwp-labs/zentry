"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";

export default function ResetPasswordPage() {
  const router = useRouter();
  const handleSave = () => router.push(PATH.login);
  const handleLogin = () => router.push(PATH.login);
  //
  return (
    <AuthContainer
      title="Reset password"
      description="Enter your email below to log in to your account"
    >
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              type="password"
              placeholder="********"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="passwordConfirmation">Confirm Password</FieldLabel>
            <Input
              id="passwordConfirmation"
              type="password"
              placeholder="********"
              required
            />
          </Field>
          <Field className="grid gap-4">
            <Button type="button" onClick={handleSave} className="h-[40px]">
              Save
            </Button>
            <Button
              type="button"
              onClick={handleLogin}
              variant="link"
              className="debug_ _h-[40px]"
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthContainer>
  );
}
