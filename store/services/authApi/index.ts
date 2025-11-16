import { useMutation } from "@tanstack/react-query";
import { authApiService } from "./service";

export function useAuthApi() {
  const loginMutation = useMutation({
    mutationFn: authApiService.login
  });

  const registerBuyerMutation = useMutation({
    mutationFn: authApiService.registerBuyer
  });

  const registerVendorMutation = useMutation({
    mutationFn: authApiService.registerVendor
  });

  return {
    loginMutation,
    registerBuyerMutation,
    registerVendorMutation,
  }
}

