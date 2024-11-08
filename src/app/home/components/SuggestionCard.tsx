import Image from "next/image";

interface SuggestionCardProps {
  imageUrl?: string;
  productName: string;
  description: string;
  tags: string[];
  classification?: number;
}

export default function SuggestionCard({
  description,
  imageUrl,
  productName,
  tags,
}: SuggestionCardProps) {
  return (
    <div className="flex items-center bg-transparent w-full min-h-[100px] rounded-2xl px-4 gap-8 shadow-none transition-all duration-300 cursor-pointer hover:bg-white/60 hover:shadow-md">
      <figure className="flex items-center justify-center max-w-[64px] min-h-[64px] w-full rounded-2xl bg-white">
        <Image
          width={40}
          height={40}
          className="w-auto h-auto"
          src={
            imageUrl ||
            "https://www.imagensempng.com.br/wp-content/uploads/2022/02/Logo-Telegram-Png-768x768.png"
          }
          alt={productName}
          priority
        />
      </figure>
      <div className="space-y-2">
        <h3 className="text-font-black font-semibold">{productName}</h3>
        <p className="text-sm text-font-grey">{description}</p>
        <ul className="flex items-center text-xs text-font-grey capitalize">
          {tags &&
            tags.slice(0, 2).map((tag, index) => (
              <li
                className="flex gap-2 items-center [&:not(:first-child)]:ml-2 [&:not(:first-child)]:before:content-normal [&:not(:first-child)]:before:size-1 [&:not(:first-child)]:before:bg-font-grey [&:not(:first-child)]:before:rounded-full "
                key={index}
              >
                {tag}
              </li>
            ))}
          {/* <li className="ml-2 relative before:content-normal before:size-1 before:bg-font-grey before:rounded-full flex items-center gap-2">
            {classification}/5
          </li> */}
        </ul>
      </div>
    </div>
  );
}
