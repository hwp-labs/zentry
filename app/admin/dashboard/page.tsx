"use client";

import { useRouter } from "next/navigation";
import { PATH } from "@/constants/PATH";

export default function AdminDashboardPage() {
  const router = useRouter();
  const gotoAddMemberPage = () => router.push(PATH.createMember);
  //
  return <h1>AdminDashboardPage</h1>;
}
