import "@/styles/globals.css";

import type { Metadata } from "next";
//
import { AppQueryClientProvider } from "@/lib/tanstack/provider";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { PRIMARY_FONT, PRIMARY_MONO_FONT } from "@/constants/FONT";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP.name}`,
    default: APP.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${PRIMARY_FONT.variable} ${PRIMARY_MONO_FONT.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={COLOR.brand} />
        <meta name="msapplication-TileColor" content={COLOR.brand} />
        <meta name="apple-mobile-web-app-status-bar-style" content={COLOR.brand} />
      </head>
      <body className="font-(family-name:--font-primary)">
        <AppQueryClientProvider>{children}</AppQueryClientProvider>
      </body>
    </html>
  );
}
