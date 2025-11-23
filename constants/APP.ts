import { Roboto_Flex, Roboto_Mono,} from "next/font/google";
import { COLOR } from "./COLOR";

export const APP = {
  name: "ZEntry",
  slug: "zentry",
  title: "Internal Database Web App - Corel Ministry Int'l",
  owner: "Corel Ministry Int'l",
  copyright: "&copy; 2024 ZEntry by HWP Labs. All rights reserved.",
  accessTokenKey: "zentry_access_token",
  refreshTokenKey: "zentry_refresh_token",
  localStorageKey: "zentry_local_storage",
};

export const META = {
  viewport: "width=device-width, initial-scale=1.0",
  "theme-color": COLOR.brand,
  "msapplication-TileColor": COLOR.brand,
  "apple-mobile-web-app-status-bar-style": COLOR.brand,
}

export const PRIMARY_FONT = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const PRIMARY_MONO_FONT = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-primary-mono",
});
