import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers/providers";
import Header from "@/components/header/header";
import { headers } from "next/headers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Proof of Nads",
  description: "Proof of Nads | Where you meet nads",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = headers().get("cookie") || "";
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background antialiased`}
      >
        <Providers cookie={cookie}>
          <main
            className="flex flex-col bg-background min-h-dvh pb-12"
            id="drawer-root"
          >
            <Header />
            <section className="flex flex-col items-center h-full flex-1">
              {children}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
