import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";
import { SubmitButton } from "@/components/molecules/form-builder/ui/submit-button";
import { GoBackButton } from "@/components/atoms/go-back-button";
import { PATH } from "@/constants/PATH";
//
import { AuthFormContainer } from "@/components/species/auth/components/auth-form-container";
import { Hyperlink } from "@/components/atoms/hyperlink";

export const metadata = {
  title: "Verify email",
};

export default function VerifyEmailPage() {
  return (
    <>
      <GoBackButton />
      <AuthFormContainer
        h1="OTP Verification Code"
        p="Enter the verification code sent to your email address"
      >
        <div className="flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <SubmitButton href={PATH.home}>Submit</SubmitButton>
        <p className="text-center text-sm text-muted-foreground">
          Didn't receive the verification code? It could take a bit of time,
          request a new code in <Hyperlink>00:59</Hyperlink>
        </p>
      </AuthFormContainer>
    </>
  );
}
