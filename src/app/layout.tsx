import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ludovic Z.",
  description: "This is my portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden bg-dark-600 text-secondary">
      <body>{children}</body>
    </html>
  );
}
