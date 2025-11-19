import { SearchIcon } from "lucide-react";
import { Input } from "@/components/shadcn/ui/input";
import { Clickable } from "@/components/atoms/clickable";

export const SearchBar: React.FC = () => {
  return (
    <section className="flex-center-between m-4 h-[56px] gap-4 rounded-full border px-2.5 bg-input">
      <Input
        type="search"
        placeholder="Search name, telephone"
        className="text-body-lg border-0 shadow-none outline-none"
      />
      <Clickable>
        <SearchIcon size={24} />
      </Clickable>
    </section>
  );
};
