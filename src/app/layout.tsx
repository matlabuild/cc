import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Matla | Peak Performance & Productivity",
  description: "Writer, entrepreneur, and performance coach helping solopreneurs and knowledge workers achieve peak performance through actionable insights on productivity and personal leverage.",
  keywords: ["productivity", "peak performance", "coaching", "entrepreneurship", "solopreneur"],
  authors: [{ name: "Sam Matla" }],
  openGraph: {
    title: "Sam Matla | Peak Performance & Productivity",
    description: "Writer, entrepreneur, and performance coach helping solopreneurs and knowledge workers achieve peak performance.",
    url: "https://sammatla.com",
    siteName: "Sam Matla",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Matla | Peak Performance & Productivity",
    description: "Writer, entrepreneur, and performance coach helping solopreneurs and knowledge workers achieve peak performance.",
    creator: "@SamMatla",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
