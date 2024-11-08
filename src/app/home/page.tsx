"use client";
import ProductCard from "./components/ProductCard";
import TopicsButton from "./components/TopicsButton";
import SuggestionCard from "./components/SuggestionCard";
import { useProducts } from "@/hooks/useProducts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTags } from "@/hooks/useTags";

export default function Home() {
  const { products } = useProducts();
  const { tags } = useTags();

  const sortedProjects = products.sort(
    (a, b) => b.upvotesCount - a.upvotesCount
  );

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <section className="max-w-7xl px-5 mx-auto pt-12 flex flex-wrap">
        <div className="w-full flex items-center gap-8 justify-center mb-8">
          <h2 className="font-semibold text-xl text-font-light-blue block">
            Trending Topics
          </h2>
          <ul className="flex gap-2">
            {tags.map((tag) => (
              <TopicsButton key={tag.id} buttonText={tag.name} />
            ))}
          </ul>
        </div>
        <div className="w-3/5">
          <h2 className="font-semibold text-xl text-font-light-blue mb-6 block">
            Top Charts
          </h2>
          <div className="space-y-6">
            {sortedProjects.map((products, index) => (
              <ProductCard
                key={index}
                // imageUrl={products.url}
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
            {sortedProjects.map((products, index) => (
              <SuggestionCard
                key={index}
                // imageUrl={products.url}
                description={products.description}
                productName={products.name}
                tags={products.tags.map((tag) => tag.name)}
              />
            ))}
          </div>
        </div>
      </section>
    </QueryClientProvider>
  );
}
