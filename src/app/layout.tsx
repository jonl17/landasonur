import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const siteUrl = "https://www.landasonur.is";

export const metadata: Metadata = {
  title: "Landasonur forlag – Jón Lorange",
  description:
    "Landasonur forlag er heimili Jóns Lorange — barnabókahöfundar, myndlistarmanns og forritara. Efri Hæðin er fyrsta barnabók hans.",
  keywords: [
    "Jón Lorange",
    "Landasonur forlag",
    "Efri Hæðin",
    "barnabók",
    "barnabókahöfundur",
    "íslenskar barnabækur",
    "myndlistarmaður",
    "Karolina Fund",
  ],
  authors: [{ name: "Jón Lorange", url: siteUrl }],
  creator: "Jón Lorange",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Landasonur forlag",
    title: "Landasonur forlag – Jón Lorange",
    description:
      "Barnabókahöfundur, myndlistarmaður og forritari. Efri Hæðin er fyrsta barnabók Jóns Lorange.",
    images: [
      {
        url: "/promo.png",
        width: 1200,
        height: 630,
        alt: "Landasonur forlag – Efri Hæðin eftir Jón Lorange",
      },
    ],
    locale: "is_IS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landasonur forlag – Jón Lorange",
    description:
      "Barnabókahöfundur, myndlistarmaður og forritari. Efri Hæðin — er fyrsta barnabók Jóns Lorange.",
    images: ["/promo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jón Lorange",
      url: siteUrl,
      sameAs: ["https://www.instagram.com/landasonur/"],
      jobTitle: ["Barnabókahöfundur", "Myndlistarmaður", "Forritari"],
      email: "jglorange@gmail.com",
    },
    {
      "@type": "Book",
      name: "Efri Hæðin",
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "is",
      genre: "Barnabók",
      publisher: {
        "@type": "Organization",
        name: "Forlagið",
        url: "https://www.forlagid.is",
      },
      offers: {
        "@type": "Offer",
        url: "https://www.forlagid.is/vara/efri-haedin/",
        availability: "https://schema.org/InStock",
        priceCurrency: "ISK",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Landasonur forlag",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "is",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${manrope.variable} antialiased`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
