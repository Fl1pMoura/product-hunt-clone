/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { ProductHuntLogo } from "./icons/ProductHuntLogo";
import { ProductsIcon } from "./icons/ProductsIcon";
import { JobsIcon } from "./icons/JobsIcon";
import { MarketplaceIcon } from "./icons/MarketplaceIcon";
import { SearchIcon } from "./icons/SerachIcon";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null; // Aguarde até que os dados do usuário sejam carregados

  const profileImageUrl = user?.imageUrl || "";
  const username = user?.fullName || "username";
  return (
    <header className="h-16 flex items-center justify-center px-6 border-b border-font-grey/0.5">
      <div className="flex items-center gap-6 mr-auto">
        <Link href="/">
          <ProductHuntLogo className="size-10" />
        </Link>
        <div className="relative w-full h-full block">
          <input
            className="w-44 min-h-8 border border-[#666666]/50 outline-none rounded-md pl-9 pr-3"
            type="text"
            placeholder="Search"
          />
          <SearchIcon className="size-4 absolute top-1/2 left-3 -translate-y-1/2" />
        </div>
      </div>
      <nav className="flex items-center text-font-light-blue h-full">
        <Link
          className="px-4 py-2.5 flex gap-2 h-full items-center transition-all hover:text-font-orange"
          href="/"
        >
          <ProductsIcon className="size-5" />
          Produtos
        </Link>
        <Link
          className="px-4 py-2.5 flex gap-2 h-full items-center transition-all hover:text-font-orange"
          href="/"
        >
          <MarketplaceIcon className="size-5" />
          MarketPlace
        </Link>
        <Link
          className="px-4 py-2.5 flex gap-2 h-full items-center transition-all hover:text-font-orange"
          href="/"
        >
          <JobsIcon className="size-5" />
          Vagas
        </Link>
      </nav>
      <div className="flex ml-auto gap-4">
        <SignedOut>
          <SignInButton>
            <button className="min-h-8 px-4 flex items-center justify-center rounded-xl bg-white transition-all border border-font-orange text-sm text-font-orange hover:bg-font-orange hover:text-white">
              Login
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2">
            {profileImageUrl && (
              <UserButton
                appearance={{ elements: { userButtonAvatarBox: "w-10 h-10" } }}
              >
                <Image src={profileImageUrl} alt={username} />
              </UserButton>
            )}
          </div>
        </SignedIn>
      </div>
    </header>
  );
}
