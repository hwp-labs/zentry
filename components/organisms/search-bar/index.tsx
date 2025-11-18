import { SearchIcon } from "lucide-react";
import { Input } from "@/components/shadcn/ui/input";
import { Clickable } from "@/components/atoms/clickable";

export const SearchBar: React.FC = () => {
  return (
    <section className="flex-center-between m-4 h-[56px] gap-4 rounded-full bg-gray-50 px-4">
      <Input
        type="search"
        placeholder="Search name, telephone"
        className="border-0 shadow-none text-body-lg"
      />
      <Clickable>
        <SearchIcon size={24} />
      </Clickable>
    </section>
  );
};
