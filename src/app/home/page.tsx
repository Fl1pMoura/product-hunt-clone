import { Product } from "@/entities/Products";
import ProductCard from "./components/ProductCard";
import TopicsButton from "./components/TopicsButton";

export default function Home() {
  const fakeProducts: Product[] = [
    {
      productName: "Product 1",
      description: "This is a description for product 1.",
      tags: ["AI", "marketing", "New"],
      url: "https://logospng.org/download/telegram/logo-telegram-4096.png",
      upVotes: 100,
    },
    {
      productName: "Product 2",
      description: "This is a description for product 2.",
      tags: ["AI", "Python"],
      url: "https://logospng.org/download/telegram/logo-telegram-4096.png",
      upVotes: 150,
    },
    {
      productName: "Product 3",
      description: "This is a description for product 3.",
      tags: ["Javascript", "Rust", "Nest"],
      url: "https://logospng.org/download/telegram/logo-telegram-4096.png",
      upVotes: 110,
    },
  ];

  const sortedProjects = fakeProducts.sort((a, b) => b.upVotes - a.upVotes);
  function filterProjects(projects: Product[], filter: string) {
    const filteredProjects = projects.filter((project) =>
      project.tags.includes(filter)
    );
    return filteredProjects;
  }
  const filteredProjects = filterProjects(sortedProjects, "AI");
  console.log(filteredProjects);

  return (
    <section className="max-w-7xl px-5 mx-auto pt-12 flex flex-wrap">
      <div className="w-full flex items-center gap-8 justify-center mb-8">
        <h2 className="font-semibold text-xl text-font-light-blue block">
          Trending Topics
        </h2>
        <ul className="flex gap-2">
          <TopicsButton buttonText="Artificial Intelligence" />
          <TopicsButton buttonText="Productivity" />
          <TopicsButton buttonText="Marketing" />
          <TopicsButton buttonText="Tech" />
          <TopicsButton buttonText="SaaS" />
        </ul>
      </div>
      <div className="w-3/4">
        <h2 className="font-semibold text-xl text-font-light-blue mb-6 block">
          Top Charts
        </h2>
        <div className="space-y-6">
          {sortedProjects.map((products, index) => (
            <ProductCard
              key={index}
              imageUrl={products.url}
              description={products.description}
              productName={products.productName}
              tags={products.tags}
              upVotes={products.upVotes}
            />
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <h2 className="font-semibold text-xl text-font-orange mb-6 block">
          Suggested for you
        </h2>
      </div>
    </section>
  );
}
