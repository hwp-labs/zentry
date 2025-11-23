import type { Metadata } from "next";
import { AppError } from "@/components/atoms/app-error";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function RootNotFound() {
  return <AppError />;
}
