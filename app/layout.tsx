import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brysk - AI-Powered Autonomous Retail Solutions",
  description:
    "Brysk's AI-powered autonomous retail solutions transforming small-format retail into smart, autonomous, staff-free stores that work 24/7.",
  keywords: [
    "Brysk",
    "AI Retail",
    "Autonomous Retail",
    "Smart Stores",
    "AI-Powered Retail",
    "Autonomous Stores",
    "Retail Technology",
    "AI Solutions",
    "Retail Automation",
    "Smart Retail",
    "Autonomous Shopping",
    "Retail Innovation",
    "AI Technology",
    "Retail Transformation",
  ],
  openGraph: {
    type: "website",
    siteName: "Brysk",
    locale: "en_US",
    url: "https://brysk-landing-page.vercel.app",
    title: "Brysk - AI-Powered Autonomous Retail Solutions",
    description:
      "Brysk's AI-powered autonomous retail solutions transforming small-format retail into smart, autonomous, staff-free stores that work 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brysk AI Retail Solutions",
      },
    ],
  },
  authors: [
    {
      name: "Akhil Dasari",
      url: "https://github.com/akhileshdasari2004",
    },
  ],
  creator: "Akhil Dasari",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
