"use client";
import "./globals.css";
import { Inter } from "@next/font/google";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const inter = Inter({
  weight: ["400", "500", "700", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body
          className={`${inter.className} bg-body text-font-grey antialiased h-dvh`}
        >
          <QueryClientProvider client={queryClient}>
            <Header />
            {children}
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
