import "@/styles/globals.css";

import type { Metadata } from "next";
//
import { AppQueryClientProvider } from "@/lib/tanstack/provider";
import { APP, META, PRIMARY_FONT, PRIMARY_MONO_FONT } from "@/constants/APP";

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
        {Object.entries(META).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
      </head>
      <body className="font-(family-name:--font-primary)">
        <AppQueryClientProvider>{children}</AppQueryClientProvider>
      </body>
    </html>
  );
}
