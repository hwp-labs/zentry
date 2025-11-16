import axios from "axios";
import { cookiesUtil } from "@/utils/cookies.util";
import { axiosUtils as _ } from "./utils";

const defaultOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // withCredentials: true,
}

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api",
  ...defaultOptions
});

export const httpServer = axios.create({
  baseURL: "/api",
  ...defaultOptions
});

httpClient.interceptors.request.use(async (config) => {
  const accessToken = await cookiesUtil.getToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

httpServer.interceptors.response.use(
  (response) => response,
  _.transformInterceptorErrorResponse
);

httpClient.interceptors.response.use(
  (response) => response,
  _.transformInterceptorErrorResponse
);