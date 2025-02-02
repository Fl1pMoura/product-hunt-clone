const TopicsButtonSkeleton = () => (
  <li>
    <div className="flex items-center justify-center px-3 py-2 w-24 h-9 bg-gray-200 rounded-lg animate-pulse" />
  </li>
);

const ProductCardSkeleton = () => (
  <div className="flex items-center bg-transparent max-w-[690px] w-full min-h-[110px] rounded-2xl px-4 gap-8">
    {/* Figure/Image placeholder */}
    <div className="flex items-center justify-center max-w-[78px] min-h-[78px] w-full rounded-2xl bg-gray-200 animate-pulse" />

    {/* Content */}
    <div className="space-y-2 flex-1">
      {/* Title */}
      <div className="h-5 w-48 bg-gray-200 rounded animate-pulse" />
      {/* Description */}
      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
      {/* Tags */}
      <div className="flex items-center gap-2">
        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>

    {/* Upvote button */}
    <div className="max-w-12 w-full min-h-14 rounded-lg bg-gray-200 animate-pulse ml-auto" />
  </div>
);

const SuggestionCardSkeleton = () => (
  <div className="flex items-center bg-transparent w-full min-h-[100px] rounded-2xl px-4 gap-8">
    {/* Figure/Image placeholder */}
    <div className="flex items-center justify-center max-w-[64px] min-h-[64px] w-full rounded-2xl bg-gray-200 animate-pulse" />

    {/* Content */}
    <div className="space-y-2 flex-1">
      {/* Title */}
      <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
      {/* Description */}
      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
      {/* Tags */}
      <div className="flex items-center gap-2">
        <div className="h-3 w-14 bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-14 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  </div>
);

export { ProductCardSkeleton, SuggestionCardSkeleton, TopicsButtonSkeleton };
