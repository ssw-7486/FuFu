import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "mochi — plant-based cat litter",
  description:
    "Made from tofu. Dust-free, biodegradable, and genuinely better. mochi is plant-based cat litter from bean to box.",
  openGraph: {
    title: "mochi — plant-based cat litter",
    description: "Made from tofu. Soft on cats. Easy on earth.",
    siteName: "mochi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
