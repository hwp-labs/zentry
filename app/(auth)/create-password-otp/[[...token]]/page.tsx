"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldDescription,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PATH } from "@/constants/PATH";
//
import { AuthContainer } from "@/components/species/auth/components/auth-container";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/shadcn/ui/input-otp";
import { Hyperlink } from "@/components/atoms/hyperlink";

export default function CreatePasswordOtpPage() {
  const router = useRouter();
  const handleVerify = () => router.push(PATH.home);
  const handleGoBack = () => router.push(PATH.CreatePassword('token123'));
  //
  return (
    <AuthContainer
      title="OTP Verification Code"
      description="Enter the verification code sent to your email address"
    >
      <form>
        <FieldGroup>
          <div className="flex-center-center">
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
          <FieldDescription className="text-muted-foreground text-center text-sm">
            Didn't receive the verification code? It could take a bit of time,
            request a new code in <Hyperlink>00:59</Hyperlink>
          </FieldDescription>
          <Field className="grid gap-4">
            <Button type="button" onClick={handleVerify} className="h-[40px]">
              Verify
            </Button>
            <Button
              type="button"
              onClick={handleGoBack}
              variant="link"
              className="debug_ _h-[40px]"
            >
              Go back
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </AuthContainer>
  );
}
