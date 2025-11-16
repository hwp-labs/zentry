"use client"; 

import { SearchIcon } from "lucide-react";
import { TextInput } from "@/components/molecules/form-builder/ui/text-input";
import { Button } from "@/components/shadcn/ui/button";

export const SearchBar: React.FC = () => {
  return (
    <div className="flex-1 flex items-center gap-4">
      <div className="relative flex-1">
        <TextInput name="q" placeholder="Search products" required />
        <SearchIcon className="absolute top-2.5 right-3" size={18} />
      </div>
      <Button className="bg-contrast flex items-center gap-2 px-4 py-2">
        Search
      </Button>
    </div>
  );
};
