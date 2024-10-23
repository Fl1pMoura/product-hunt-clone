import { Product } from "@/entities/Products";
import ProductCard from "./components/ProductCard";

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
    <section className="max-w-7xl px-5 mx-auto pt-8">
      <div>
        <h2 className="font-semibold text-xl text-font-light-blue mb-6 block">
          Top Charts
        </h2>
      </div>
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
    </section>
  );
}
