import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const euclid = localFont({
  src: [
    {
      path: "../public/Euclid-Circular-B-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/Euclid-Circular-B-Regular.ttf",
      weight: "700",
      style: "normal"
    },
  ],
  variable: "--font-euclid"
})

export const metadata: Metadata = {
  title: "kin - The Terminal's Second Brain",
  description: "A lightweight Go CLI to store, fuzzy-search, and execute shell snippets. Powered by SQLite, driven by speed.",
  openGraph: {
    title: 'Kinctx',
    description: 'A lightweight Go CLI to store, fuzzy-search, and execute shell snippets. Powered by SQLite, driven by speed.',
    url: 'https://kinctx.kaizakin.site',
    siteName: 'kinctx',
    images: [
      {
        url: 'https://collection.cloudinary.com/dzflkog8z/3d470213c019ec66e696799e1b577113', 
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kinctx',
    description: 'Lightweight CLI snippet manager',
    images: ['https://collection.cloudinary.com/dzflkog8z/3d470213c019ec66e696799e1b577113'], // Also absolute URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${euclid.className} antialiased bg-background text-foreground min-h-screen font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
