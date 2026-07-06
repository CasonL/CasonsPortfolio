import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://casonsportfolio.netlify.app"),
  title: "Cason Lamothe | Technical Profile",
  description: "Technical proof: AI systems, multi-agent orchestration, voice pipelines, and full-stack shipping. Built by Cason Lamothe.",
  openGraph: {
    title: "Cason Lamothe | Technical Profile",
    description: "AI systems, multi-agent orchestration, voice pipelines, and full-stack shipping.",
    url: "https://casonsportfolio.netlify.app/technical",
    siteName: "Cason Lamothe",
    images: ["/og-image.jpg"],
    type: "website",
  },
};

export default function TechnicalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
