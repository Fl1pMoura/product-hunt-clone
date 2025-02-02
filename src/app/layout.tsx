"use client";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "700", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { refetchOnWindowFocus: false, retry: false },
        },
      })
  );
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body
          className={`${inter.className} bg-body text-font-grey antialiased h-dvh`}
        >
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools position="bottom-right" panelPosition="left" />
            <Header />
            {children}
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
