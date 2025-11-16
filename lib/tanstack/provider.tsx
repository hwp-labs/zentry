"use client"

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config";

export function AppQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
