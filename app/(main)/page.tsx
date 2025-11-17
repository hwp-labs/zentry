import { Typography } from "@/components/atoms/typography";
import { AppBar } from "@/components/organisms/app-bar";
import { SearchBar } from "@/components/organisms/search-bar";
import { Badge } from "@/components/shadcn/ui/badge";

export default function HomePage() {
  return (
    <div className="">
      <AppBar />
      <SearchBar />
      <Filters />
    </div>
  );
}

const Filters = () => {
  return (
    <section className="flex items-center gap-2 px-4">
      {["All", "Favour", "Mercy", "Victory", "Men"].map((item, i) => (
        <Badge
          key={i}
          variant="outline"
          className="h-[32px] rounded-[8px] px-4"
        >
          <Typography.Small>{item}</Typography.Small>
        </Badge>
      ))}
    </section>
  );
};
