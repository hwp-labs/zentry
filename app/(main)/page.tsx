import { Hero } from "@/components/organisms/hero";
import { FeaturedList } from "@/components/molecules/featured-list";
import { ProductList } from "@/components/molecules/product-list";
import { Recommendations } from "@/components/molecules/recommendations";

export default function HomePage() {
  return (
    <div className="">
      <Hero />
      <FeaturedList />
      <Recommendations />
      <ProductList />
    </div>
  );
}
