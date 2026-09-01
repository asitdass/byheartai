import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/nav/site-header";
import "./globals.css";

// Self-hosted at build time by next/font (no runtime CDN calls).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://byheartai.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ByHeart AI - Learn AI. Know it by heart.",
    template: "%s | ByHeart AI",
  },
  description:
    "Understand modern AI concepts through simple explanations, interactive visuals, examples and hands-on learning. Learn AI. Know it by heart.",
  openGraph: {
    type: "website",
    siteName: "ByHeart AI",
    title: "ByHeart AI - Learn AI. Know it by heart.",
    description:
      "Understand modern AI concepts through simple explanations, interactive visuals, and hands-on learning.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "ByHeart AI - Learn AI. Know it by heart.",
    description:
      "Understand modern AI concepts through simple explanations, interactive visuals, and hands-on learning.",
  },
};

// Runs before paint to apply the saved theme + font-size (prevents flash).
const themeInit = `(function(){try{
  var t=localStorage.getItem('bh-theme');
  var f=localStorage.getItem('bh-font-size');
  if(!t||t==='system'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}
  document.documentElement.setAttribute('data-theme',t);
  if(f)document.documentElement.setAttribute('data-font-size',f);
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <div id="main">{children}</div>
      </body>
    </html>
  );
}
