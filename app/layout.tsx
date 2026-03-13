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
