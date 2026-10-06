import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";
import CodeGlyphs from "@/components/ui/code-glyphs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dhrithi MV — AI/ML Engineer",
  description:
    "Dhrithi MV — AI/ML Engineer building retrieval-based AI systems, data pipelines, and analytics products with Python, LLMs, and vector databases.",
  keywords: [
    "Dhrithi MV",
    "AI Engineer",
    "ML Engineer",
    "Data Engineer",
    "Python",
    "LLM",
    "Power BI",
    "Portfolio",
  ],
  authors: [{ name: "Dhrithi MV" }],
  openGraph: {
    title: "Dhrithi MV — AI/ML Engineer",
    description:
      "Building retrieval-based AI systems and the data pipelines that feed them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth scroll-pt-[70px]">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        <div 
          className="fixed inset-0 w-screen h-screen -z-20 pointer-events-none bg-engineering-grid opacity-20"
        />
        <CustomCursor />
        <CodeGlyphs />
        {children}
      </body>
    </html>
  );
}
