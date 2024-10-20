import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  description: string;
  tags: string[];
  upVotes: number;
}

export default function ProductCard({
  imageUrl,
  productName,
  description,
  tags = [],
  upVotes = 0,
}: ProductCardProps) {
  return (
    <div className="flex items-center max-w-[690px] w-full min-h-[110px] rounded-2xl px-4 gap-8">
      <figure className="flex items-center justify-center max-w-[78px] min-h-[78px] w-full rounded-2xl bg-white">
        <Image width={48} height={48} src={imageUrl} alt={productName} />
      </figure>
      <div className="space-y-2">
        <h3 className="font-semibold text-base text-font-black">
          {productName}
        </h3>
        <p className="text-font-grey text-sm">{description}</p>
        <ul className="flex items-center">
          {tags &&
            tags.map((tag, index) => (
              <li className="text-xs text-font-grey" key={index}>
                {tag}
              </li>
            ))}
        </ul>
      </div>
      <button
        type="button"
        className="max-w-12 w-full min-h-14 flex flex-col rounded-lg items-center justify-center border border-font-grey/0.16 gap-3 text-xs text-font-black ml-auto"
      >
        <svg
          className="w-2.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 5"
        >
          <path d="M10 5 5 0 0 5h10Z" fill="#333" />
        </svg>
        {upVotes}
      </button>
    </div>
  );
}
