import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uniform Launch 2026/27",
  description: "Experience the next generation of athletic excellence",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  openGraph: {
    title: "Uniform Launch 2026/27",
    description: "Experience the next generation of athletic excellence",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
