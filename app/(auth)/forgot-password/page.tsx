import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
import { SubmitButton } from "@/components/molecules/form-builder/ui/submit-button";
import { GoBackButton } from "@/components/atoms/go-back-button";
import { PATH } from "@/constants/PATH";
//
import { AuthFormContainer } from "@/components/species/auth/components/auth-form-container";

export const metadata = {
  title: "Forgot password",
};

export default function ForgotPasswordPage() {
  return (
    <>
      <GoBackButton />
      <AuthFormContainer
        h1="Forgot password"
        p="Fill in the form details below"
      >
        <TextInput
          name="email"
          type="email"
          label="Email"
          placeholder="Ex. person@domain.com"
          required
        />
        <SubmitButton href={PATH.createPassword}>Send</SubmitButton>
      </AuthFormContainer>
    </>
  );
}
