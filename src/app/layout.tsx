import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/resume";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name}`,
  description: profile.positioning,
};

/**
 * Marks the document as scripted before paint, which is what arms the scroll
 * reveals — without it they stay visible rather than hidden, so the page still
 * reads with JavaScript off. It no longer resolves a theme: the site is dark
 * only, so the palette is plain CSS with nothing to restore.
 */
const bootScript = `(function(){document.documentElement.classList.add("js");})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
