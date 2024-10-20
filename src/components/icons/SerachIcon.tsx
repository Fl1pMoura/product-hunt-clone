interface SearchIconProps {
  className?: string;
}

export function SearchIcon({ className }: SearchIconProps) {
  return (
    <svg
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        opacity=".5"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.667 2.083a5.583 5.583 0 1 0 0 11.167 5.583 5.583 0 0 0 0-11.167ZM.583 7.667a7.083 7.083 0 1 1 14.167 0 7.083 7.083 0 0 1-14.167 0Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.803 11.803a.75.75 0 0 1 1.06 0l2.334 2.333a.75.75 0 0 1-1.06 1.061l-2.334-2.333a.75.75 0 0 1 0-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}
