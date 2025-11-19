import { PasswordInput } from "@/components/molecules/form-builder/ui/password-input";
import { SubmitButton } from "@/components/molecules/form-builder/ui/submit-button";
import { GoBackButton } from "@/components/atoms/go-back-button";
import { PATH } from "@/constants/PATH";
//
import { AuthFormContainer } from "@/components/species/auth/components/auth-form-container";

export const metadata = {
  title: "Reset password",
};

export default function ResetPasswordPage() {
  return (
    <>
      <GoBackButton />
      <AuthFormContainer
        h1="Reset password"
        p="Fill in the form details below"
      >
        <PasswordInput name="password" label="Password" />
        <PasswordInput name="confirmPassword" label="Confirm Password" />
        <SubmitButton href={PATH.home}>Done</SubmitButton>
      </AuthFormContainer>
    </>
  );
}
