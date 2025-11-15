import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CoinLogo } from "@/components/coin";

const inter = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Landasonur forlag",
  description: "Efri Hæðin er í fjármögnun á Karolina Fund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={`antialiased, ${inter}`}>
        {/* Floating logo top-left */}
        {/* Floating 3D coin logo (top-left) */}
        <div className="absolute top-6 left-6 z-20">
          <CoinLogo size={120} />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
