"use client";

// DOC: https://m3.material.io/components/chips/specs

import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/shadcn/ui/badge";

interface Props {
  label: string;
}

export const FilterChips: React.FC<Props> = ({ label }) => {
  return (
    <Badge
      variant={"outline"}
      className="h-[32px] rounded-[8px] transition-colors gap-2 pl-3"
    >
      <p className="text-label-lg">{label}</p>
      <ChevronDown size={18}/>
    </Badge>
  );
};