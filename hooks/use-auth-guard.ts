import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
// 
import { useAppStore } from "@/store";
import { useAuthApi } from "@/store/services/authApi";
import { LoginRequest } from "@/store/services/authApi/types";
import { cookiesUtil } from "@/utils/cookies.util";
import { PATH, PUBLIC_PATHS } from "@/constants/PATH";

export function useAuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // 
  const resetAppSlice = useAppStore((s) => s.resetAppSlice);
  const setUser = useAppStore((s) => s.setUser);
  const { loginMutation } = useAuthApi();
  // 
  const [authenticating, setAuthenticating] = useState(false);
  // 
  const isGuarding = authenticating || loginMutation.isPending;

  useEffect(() => {
    if (!PUBLIC_PATHS.includes(pathname)) {
      setAuthenticating(true)

      if (!cookiesUtil.getTokenClient()) {
        router.push(PATH.login);
      }

      setAuthenticating(false)
    }
  }, [router]);

  function handleLogin(payload: LoginRequest) {
    loginMutation
      .mutateAsync(payload)
      .then((res) => {
        alert(res.message);

        if (res.access_token) {
          cookiesUtil.setTokenClient({
            accessToken: res.access_token,
            refreshToken: res.refresh_token,
          });

          if (res.user) {
            setUser({
              name: res.user.email?.split("@")[0],
              email: res.user.email,
              role: res.user.role,
            });
          }
        }

        const redirect = searchParams.get("redirect");
        router.push(redirect ?? PATH.home);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  function handleLogout() {
    if (confirm("Are you sure?")) {
      setAuthenticating(true)

      cookiesUtil.removeTokenClient();

      resetAppSlice();

      router.push(PATH.login);

      setAuthenticating(false)
    }
  };

  return { authenticating, isGuarding, handleLogin, handleLogout };
}
