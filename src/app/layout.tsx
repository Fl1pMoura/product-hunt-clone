import { Metadata } from "next";
import "./globals.css";
import { Arimo } from "@next/font/google";

export const metadata: Metadata = {
  title: "Product Hunt Clone",
  description:
    "Explore as últimas inovações em tecnologia, aplicativos, e ferramentas com o nosso clone do Product Hunt. Descubra, compartilhe e avalie novos produtos diariamente.",
  keywords:
    "Product Hunt, tecnologia, aplicativos, novas ferramentas, inovações, startups, avaliações de produtos, tendências em tecnologia",
  openGraph: {
    title:
      "Product Hunt Clone | Descubra Novos Produtos e Inovações em Tecnologia",
    description:
      "Sua fonte para as últimas novidades em tecnologia e ferramentas inovadoras. Junte-se à comunidade e compartilhe suas descobertas.",
    url: "https://www.seusite.com", // substitua pela URL real do site
    type: "website",
    images: [
      {
        url: "https://www.seusite.com/images/logo.png", // substitua pela URL da logo/imagem
        alt: "Logo do Product Hunt Clone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Hunt Clone | Descubra Novos Produtos",
    description:
      "Explore as últimas inovações em tecnologia e ferramentas com o nosso clone do Product Hunt. Participe e compartilhe suas descobertas!",
    images: ["https://www.seusite.com/images/logo.png"], // substitua pela URL da logo/imagem
  },
};

const arimo = Arimo({
  weight: ["400", "500", "700", "600"],
  subsets: ["latin"], // ou outros subconjuntos que você precisar
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${arimo.className} text-font-dark-grey antialiased h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}