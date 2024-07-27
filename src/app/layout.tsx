import { ReactNode } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <head>
      <title>FIPBET: SITUS SLOT GACOR SERVER THAILAND MAXWIN HARI INI TERBARU</title>
      <meta http-equiv="Accept-CH" content="Sec-CH-UA-Platform-Version, Sec-CH-UA-Model" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="canonical" href="https://fipbetpro.com/" />
      <link rel="amphtml" href="https://redirecter.us/untukmu" />
      <meta name="google-site-verification" content="C72MbmniHye6fA_H1887UpCCWb-OrQ4LZrPRHl9QOj4" />
      <meta property="og:site_name" content="DEMO SLOT" />
      <meta property="og:title" content="FIPBET: SITUS SLOT GACOR SERVER THAILAND MAXWIN HARI INI TERBARU" />
      <meta property="og:url" content="https://fipbetpro.com/" />
      <meta property="og:type" content="product" />
      <meta property="og:description" content="FIPBET, situs slot online terpercaya yang menyediakan permainan slot gacor dengan server terbaik dari Thailand. Nikmati pengalaman bermain yang seru dan menguntungkan dengan peluang Maxwin setiap hari di tahun 2024. pasti Anti Rungkat!!" />
      <meta property="og:image" content="/favicon.ico" />
      <meta property="og:image:width" content="680" />
      <meta property="og:image:height" content="1207" />
      <meta property="product:price:amount" content="10000.00" />
      <meta property="product:price:currency" content="IDR" />
      <meta property="product:availability" content="instock" />
      <link rel="image_src" href="/favicon.ico" />
      <meta name="twitter:title" content="FIPBET: SITUS SLOT GACOR SERVER THAILAND MAXWIN HARI INI TERBARU" />
      <meta name="twitter:image" content="/favicon.ico" />
      <meta name="twitter:url" content="https://fipbetpro.com/" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content="FIPBET, situs slot online terpercaya yang menyediakan permainan slot gacor dengan server terbaik dari Thailand. Nikmati pengalaman bermain yang seru dan menguntungkan dengan peluang Maxwin setiap hari di tahun 2024. pasti Anti Rungkat!!" />
      <meta name="description" content="FIPBET, situs slot online terpercaya yang menyediakan permainan slot gacor dengan server terbaik dari Thailand. Nikmati pengalaman bermain yang seru dan menguntungkan dengan peluang Maxwin setiap hari di tahun 2024. pasti Anti Rungkat!!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Fipbet Slot Gacor",
              "url": "https://www.fipbet.com",
              "sameAs": [
                "https://www.facebook.com/fipbet",
                "https://www.twitter.com/fipbet",
                "https://www.instagram.com/fipbet"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.fipbet.com/search?query={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
