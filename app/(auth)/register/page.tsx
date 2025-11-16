import { Hyperlink } from "@/components/atoms/hyperlink";
import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
import { SubmitButton } from "@/components/molecules/form-builder/ui/submit-button";
import { PATH } from "@/constants/PATH";
//
import { AuthFormContainer } from "@/components/species/auth/components/auth-form-container";

export const metadata = {
  title: "Create an account",
};

export default function RegisterPage() {
  return (
    <AuthFormContainer
      h1="Create an account"
      p="Fill in the form details below"
    >
      <TextInput
        name="name"
        label="Name"
        placeholder="Ex. Mama Osato"
        required
      />
      <TextInput
        name="email"
        type="email"
        label="Email"
        placeholder="Ex. person@domain.com"
        required
      />
      <TextInput
        name="telephone"
        type="tel"
        label="Telephone"
        placeholder="Ex. +2340000000000"
        required
      />
      <SubmitButton href={PATH.createPassword}>Continue</SubmitButton>
      <div className="flex items-center justify-center gap-1">
        <p className="text-muted-foreground text-sm text-balance">
          Already have an account?
        </p>
        <Hyperlink href={PATH.login}>Log in</Hyperlink>
      </div>
    </AuthFormContainer>
  );
}
