import type { Metadata } from "next";
import "./globals.css";
import {TheHeader} from "@/components/TheHeader";
import {TheFooter} from "@/components/TheFooter";

export const metadata: Metadata = {
    title: "My Next.js Multi-Language Website",
    description: "A multi-language website built using Next.js with the App Router.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body>
      <TheHeader />
      <main className="container">{children}</main>
      <TheFooter />
      </body>
    </html>
  );
}
