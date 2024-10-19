interface ProductHuntLogoProps {
  className?: string;
}

export function ProductHuntLogo({ className }: ProductHuntLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 40 40"
    >
      <g fill="none" fill-rule="evenodd">
        <path
          fill="#FF6154"
          d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20"
        />
        <path
          fill="#FFF"
          d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14"
        />
      </g>
    </svg>
  );
}
