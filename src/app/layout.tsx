import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <div>{children}</div>
      </body>
    </html>
  );
}
