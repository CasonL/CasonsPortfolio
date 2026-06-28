import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://casonsportfolio.netlify.app"),
  title: "Cason Lamothe | Product Designer & AI Architect",
  description: "Portfolio of Cason Lamothe: product designer, AI systems architect, and leader building products like PitchIQ and an AI resume builder.",
  openGraph: {
    title: "Cason Lamothe | Builder. Operator. The guy who actually ships.",
    description: "Product designer and AI systems architect. See how I think, what I build, and why depth is the only strategy worth having.",
    url: "https://casonsportfolio.netlify.app",
    siteName: "Cason Lamothe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cason Lamothe Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cason Lamothe | Builder. Operator. The guy who actually ships.",
    description: "Product designer and AI systems architect. See how I think, what I build, and why depth is the only strategy worth having.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-forest-900 text-cream-100">
        {children}
      </body>
    </html>
  );
}
