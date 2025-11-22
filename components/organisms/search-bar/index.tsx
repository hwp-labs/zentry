"use client";

import { useRouter } from "next/navigation";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/shadcn/ui/input";
import { Clickable } from "@/components/atoms/clickable";
import { PATH } from "@/constants/PATH";

export const SearchBar: React.FC = () => {
  const router = useRouter();
  const handleSearch = () => router.push(PATH.members);
  // 
  return (
    <section className="flex-center-between mx-4 h-[56px] gap-4 rounded-full border px-2.5 bg-muted">
      <Input
        type="search"
        placeholder="Search name, telephone"
        className="text-body-lg border-0 shadow-none outline-none"
      />
      <Clickable onClick={handleSearch}>
        <SearchIcon size={24} />
      </Clickable>
    </section>
  );
};
