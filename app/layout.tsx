import "@/styles/globals.css";

import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono  } from 'next/font/google'
// 
import { AppQueryClientProvider } from "@/lib/tanstack/provider";
import { APP } from "@/constants/APP";

const primaryFont = Roboto_Flex({ 
  subsets: ['latin'],
  variable: '--font-primary'
})

const primaryFontMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-primary-mono'
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP.name}`,
    default: APP.title,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${primaryFont.variable} ${primaryFontMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-[family-name:var(--font-primary)]">
        <AppQueryClientProvider>{children}</AppQueryClientProvider>
      </body>
    </html>
  );
}
