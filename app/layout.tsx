import "./globals.css";

import type { ReactNode } from "react";

export const metadata = {
  title: "Bharat Santani | Lead Software Engineer | Engineering Architect",
  description: "AI-Accelerated Engineering • Cloud-Native • DevSecOps",
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