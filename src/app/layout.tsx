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
 * Runs before paint so a stored light-mode preference never flashes dark first,
 * and so scroll reveals only arm themselves when JavaScript is available.
 * Dark is the default when nothing is stored.
 */
const bootScript = `(function(){var e=document.documentElement;e.classList.add("js");var t="dark";try{if(localStorage.getItem("theme")==="light")t="light";}catch(n){}e.classList.toggle("dark",t==="dark");e.style.colorScheme=t;})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
