import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBMPLEX = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-ibm-sans",
});

export const metadata: Metadata = {
  title: "Imagify",
  description: "AI-powered photo restoration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" appearance={{
      variables: { colorPrimary: "#624cf5" },
      elements: {
        footer: "hidden",
      },
    }}>
      <html lang="en">
        <body
          className={cn("font-IBMPlex antialiased", IBMPLEX.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
