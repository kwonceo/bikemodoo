import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "배달오토바이 렌트 서비스",
  description: "안전하고 믿을 수 있는 배달오토바이 렌트 서비스",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  keywords: "배달오토바이, 오토바이렌트, 배달대행, 배달오토바이렌트",
  authors: [{ name: "bikemodoo" }],
  openGraph: {
    title: "배달오토바이 렌트 서비스",
    description: "안전하고 믿을 수 있는 배달오토바이 렌트 서비스",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
