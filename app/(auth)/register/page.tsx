"use client";

import { useRouter } from "next/navigation";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { AvatarUploader } from "@/components/atoms/avatar-uploader";
import { PATH } from "@/constants/PATH";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = () => router.push(PATH.CreatePassword('token123'));
  const handleLogin = () => router.push(PATH.login);
  //
  return (
    <AuthContainer
      title="Create your account"
      description="Enter your email below to create your account"
    >
      <form>
        <FieldGroup>
          <Field>
            <AvatarUploader />
          </Field>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Input id="name" type="text" placeholder="John Doe" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email Address</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="telephone">Phone Number</FieldLabel>
            <Input id="telephone" type="tel" placeholder="+234" required />
          </Field>
          <Field className="grid gap-6">
            <Button type="button" onClick={handleRegister} className="h-[40px]">
              Create Account
            </Button>
            <FieldSeparator>OR</FieldSeparator>
            <Button
              type="button"
              onClick={handleLogin}
              variant="contrast"
              className="h-[40px]"
            >
              Sign in
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthContainer>
  );
}
