interface ProductsIconProps {
  className?: string;
}

export function ProductsIcon({ className }: ProductsIconProps) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 17 18"
    >
      <path
        d="M5.518 16.182c1.464.768 2.195 1.151 2.982 1.151V9L.698 4.894a2.643 2.643 0 0 0-.033.056C.167 5.795.167 6.847.167 8.952v.097c0 2.104 0 3.156.497 4.001.499.846 1.395 1.317 3.188 2.257l1.666.875Z"
        fill="currentColor"
      />
      <path
        opacity=".7"
        d="m13.148 2.693-1.667-.875C10.018 1.051 9.287.667 8.5.667c-.787 0-1.518.383-2.982 1.151l-1.666.875c-1.754.92-2.65 1.39-3.154 2.2L8.5 9l7.802-4.106c-.505-.81-1.4-1.28-3.154-2.2Z"
        fill="currentColor"
      />
      <path
        opacity=".5"
        d="M16.336 4.95a2.469 2.469 0 0 0-.034-.056L8.5 9v8.333c.787 0 1.518-.383 2.982-1.151l1.666-.875c1.793-.941 2.69-1.411 3.188-2.257.497-.845.497-1.898.497-4v-.098c0-2.104 0-3.157-.497-4.002Z"
        fill="currentColor"
      />
    </svg>
  );
}
