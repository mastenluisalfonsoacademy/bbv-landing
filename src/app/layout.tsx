import type { Metadata } from "next";
import "./globals.css";
import { Oswald, Inter } from "next/font/google";

const oswald = Oswald({ weight: ["700"], subsets: ["latin"], variable: "--font-bebas" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BalanceBodyVital — Dein Körper. Deine Stärke.",
  description: "Maßgeschneiderter Ernährungsplan, 1:1 Training und Coaching — für echte, nachhaltige Ergebnisse.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`h-full ${oswald.variable} ${inter.variable}`}>
      <body className={`min-h-full ${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
