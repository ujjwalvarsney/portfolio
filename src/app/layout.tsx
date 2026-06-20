import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Ujjwal | UX Designer",
  description:
    "Senior UX Designer crafting intuitive, data-driven experiences for enterprise and consumer products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        {children}
      </body>

      <GoogleAnalytics gaId="G-W3HS5NGGP9" />
    </html>
  );
}