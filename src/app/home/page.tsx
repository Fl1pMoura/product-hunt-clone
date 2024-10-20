import ProductCard from "./components/ProductCard";

export default function Home() {
  const fakeProducts = [
    {
      productName: "Product 1",
      description: "This is a description for product 1.",
      tags: ["tag1", "tag2", "tag3"],
      upVotes: 10,
    },
    {
      productName: "Product 2",
      description: "This is a description for product 2.",
      tags: ["tag2", "tag4"],
      upVotes: 5,
    },
    {
      productName: "Product 3",
      description: "This is a description for product 3.",
      tags: ["tag1", "tag3", "tag5"],
      upVotes: 8,
    },
  ];

  return (
    <section className="max-w-7xl px-5 mx-auto pt-8">
      <div>
        <h2 className="font-semibold text-xl text-font-light-blue">
          Top Charts
        </h2>
      </div>
      <div>
        {fakeProducts.map((products, index) => (
          <ProductCard
            key={index}
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
