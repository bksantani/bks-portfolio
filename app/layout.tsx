import "./globals.css";

import type { ReactNode } from "react";

export const metadata = {
  title: "Bharat Santani | Lead Software Engineer | Engineering Architect",
  description: "AI-Accelerated Engineering • Cloud-Native • DevSecOps • Java • Angular",
  openGraph: {
    title: "Bharat Santani | Engineering Portfolio",
    description:
      "AI-Accelerated Engineering, Cloud-Native Architecture, DevSecOps, Full-Stack, Java, Spring Boot, Angular.",
    url: "https://bks-portfolio.vercel.app",
    siteName: "BKS Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bharat Santani Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative antialiased overflow-x-hidden bg-neutral-950 text-white">
        {children}
      </body>
    </html>
  );
}