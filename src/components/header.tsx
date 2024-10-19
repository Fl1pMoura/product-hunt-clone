import Link from "next/link";
import { ProductHuntLogo } from "./icons/ProductHuntLogo";

export default function Header() {
  return (
    <header className="min-h-16 flex items-center justify-center px-6 bg-red-50 ">
      <div className="flex items-center">
        <Link href="/">
          <ProductHuntLogo className="size-8" />
        </Link>
        <input type="text" />
      </div>
      <nav>
        <Link href="/">Produtos</Link>
        <Link href="/">Categorias</Link>
        <Link href="/">Sobre</Link>
      </nav>
      <div className="flex">
        <Link href="/login">Login</Link>
        <Link href="/register">Registro</Link>
      </div>
    </header>
  );
}
