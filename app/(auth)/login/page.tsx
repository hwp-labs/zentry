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

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = () => router.push(PATH.home);
  const handleRegister = () => router.push(PATH.register);
  //
  return (
    <AuthContainer
      title="Welcome back"
      description="Enter your email below to log in to your account"
    >
      <form>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              type="search"
              placeholder="Email or telephone"
              required
            />
          </Field>
          <Field>
          <div className="flex-center-between">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link href={PATH.forgotPassword} className="text-brand text-sm">Forgot password?</Link>
          </div>
            <Input id="password" type="password" placeholder="********" required />
          </Field>
          <Field className="grid gap-6">
            <Button type="button" onClick={handleLogin} className="h-[40px]">
              Log in
            </Button>
            <FieldSeparator>OR</FieldSeparator>
            <Button
              type="button"
              onClick={handleRegister}
              variant="contrast"
              className="h-[40px]"
            >
              Register
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthContainer>
  );
}
