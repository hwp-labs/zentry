import { APP } from "@/constants/APP";
import { NextRequest } from "next/server";

const ACCESS_TOKEN_KEY = APP.accessTokenKey
const REFRESH_TOKEN_KEY = APP.refreshTokenKey
const PATH_EXPIRE = 'path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'

function getTokenMiddleware(req: NextRequest) {  
  return req.cookies.get(ACCESS_TOKEN_KEY)?.value  
}

async function getTokenServer() {
  try {
    const { cookies } = require("next/headers");
    const token = await cookies().get(ACCESS_TOKEN_KEY)
    return token?.value ?? null;
  } catch {
    return null;
  }
}

function getTokenClient() {
  const token = document.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${ACCESS_TOKEN_KEY}=`))?.split('=')[1]

  return token ?? null;
}

async function getToken() {
  if (typeof window === "undefined") {
    return await getTokenServer();
  }

  return getTokenClient();
}

function setTokenClient({
  accessToken,
  refreshToken,
}: {
  accessToken?: string;
  refreshToken?: string;
}) {
  const now = new Date();
  const pathSameSite = 'path=/; Secure; SameSite=Lax'

  if (accessToken) {
    const accessTokenExpiry = new Date(now);
    accessTokenExpiry.setHours(now.getHours() + 24); // 24 hours from now
    document.cookie = `${ACCESS_TOKEN_KEY}=${accessToken}; ${pathSameSite}; expires=${accessTokenExpiry.toUTCString()}`;
  } else {
    document.cookie = `${ACCESS_TOKEN_KEY}=; ${PATH_EXPIRE}`;
  }

  if (refreshToken) {
    const refreshTokenExpiry = new Date(now);
    refreshTokenExpiry.setDate(now.getDate() + 7); // 7 days from now
    document.cookie = `${REFRESH_TOKEN_KEY}=${refreshToken}; ${pathSameSite}; expires=${refreshTokenExpiry.toUTCString()}`;
  } else {
    document.cookie = `${REFRESH_TOKEN_KEY}=; ${PATH_EXPIRE}`;
  }
}

function removeTokenClient() {
  document.cookie = `${ACCESS_TOKEN_KEY}=; ${PATH_EXPIRE}`;
  document.cookie = `${REFRESH_TOKEN_KEY}=; ${PATH_EXPIRE}`;
}

export const cookiesUtil = {
  getTokenMiddleware,
  getTokenServer,
  getTokenClient,
  getToken,
  setTokenClient,
  removeTokenClient
}