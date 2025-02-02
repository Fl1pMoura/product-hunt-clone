"use client";
import { useProducts } from "@/hooks/useProducts";
import { useTags } from "@/hooks/useTags";
import ProductCard from "./components/ProductCard";
import {
  ProductCardSkeleton,
  SuggestionCardSkeleton,
  TopicsButtonSkeleton,
} from "./components/Skeletons";
import SuggestionCard from "./components/SuggestionCard";
import TopicsButton from "./components/TopicsButton";

export default function Home() {
  const { products, isFetching: isProductsLoading } = useProducts();
  const { tags, isFetching: isTagsLoading } = useTags();

  const sortedProjects =
    products?.sort((a, b) => b.upvotesCount - a.upvotesCount) ?? [];

  return (
    <section className="max-w-7xl px-5 mx-auto pt-12 flex flex-wrap">
      <div className="w-full flex items-center gap-8 justify-center mb-8">
        <h2 className="font-semibold text-xl text-font-light-blue block">
          Trending Topics
        </h2>
        <ul className="flex gap-2">
          {isTagsLoading
            ? // Mostra 4 skeletons de tags enquanto carrega
              Array(4)
                .fill(0)
                .map((_, i) => <TopicsButtonSkeleton key={i} />)
            : tags.map((tag) => (
                <TopicsButton key={tag.id} buttonText={tag.name} />
              ))}
        </ul>
      </div>
      <div className="w-3/5">
        <h2 className="font-semibold text-xl text-font-light-blue mb-6 block">
          Top Charts
        </h2>
        <div className="space-y-6">
          {isProductsLoading
            ? // Mostra 3 skeletons de produtos enquanto carrega
              Array(3)
                .fill(0)
                .map((_, index) => <ProductCardSkeleton key={index} />)
            : sortedProjects.map((products, index) => (
                <ProductCard
                  key={index}
                  description={products.description}
                  productName={products.name}
                  tags={products.tags.map((tag) => tag.name)}
                  upVotes={products.upvotesCount}
                />
              ))}
        </div>
      </div>
      <div className="w-2/5 pl-4">
        <h2 className="font-semibold text-xl text-font-orange mb-6 block">
          Suggested for you
        </h2>
        <div className="space-y-4">
          {isProductsLoading
            ? // Mostra 4 skeletons de sugestões enquanto carrega
              Array(4)
                .fill(0)
                .map((_, index) => <SuggestionCardSkeleton key={index} />)
            : sortedProjects.map((products, index) => (
                <SuggestionCard
                  key={index}
                  description={products.description}
                  productName={products.name}
                  tags={products.tags.map((tag) => tag.name)}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
