import { NextResponse, type NextRequest } from "next/server";
import { PATH, PUBLIC_PATHS } from "@/constants/PATH";
import { cookiesUtil } from "@/utils/cookies.util";

export function middleware(req: NextRequest) {
  return NextResponse.next();
  const token = cookiesUtil.getTokenMiddleware(req);
  const { pathname } = req.nextUrl; // /users/1

  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    const path = PATH.home === pathname ? PATH.login : `${PATH.login}?redirect=${pathname}`
    return NextResponse.redirect(new URL(path, req.url));
  }

}

export const config = {
  matcher: [
    // Match all pages except Next.js system and static assets
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|manifest.json|public|api/).*)",
  ],
};
