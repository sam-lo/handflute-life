import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import React from "react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: {
    default: "香港手笛協會 | Hong Kong Handflute Association",
    template: "%s | 香港手笛協會", // Reordered for better flow
  },
  description: "香港手笛協會 - 全球唯一推廣普及手笛並提供系統式教學的機構，致力推廣手笛音樂文化",
  keywords: [
    "handflute", "music", "culture", "hong kong", "association", "handflute association",
    "music culture", "music education", "music promotion", "learn handflute", "handflute workshops",
    "handflute performances", "flute", "instrument", "arts", "events",
    "手笛", "香港手笛協會", "笛", "音樂", "文化", "樂器", "文青", "活動", "香港", "協會",
    "手笛協會", "音樂文化", "音樂教育", "音樂推廣", "綠色", "大自然"
  ], // Grouped and added long-tail keywords
  metadataBase: new URL("https://handflute.life"),
  openGraph: {
    description: "香港手笛協會 - 全球唯一推廣普及手笛並提供系統式教學的機構，致力推廣手笛音樂文化",
    siteName: "香港手笛協會 | Hong Kong Handflute Association",
    type: "website"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Hong Kong Handflute Association",
  appleWebApp: {
    title: "Hong Kong Handflute Association",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: "/logoWText.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <title>
        香港手笛協會 | Hong Kong Handflute Association
      </title>
      <link rel="icon" href="/public/favicon.ico" sizes="any"/>
    </head>
    <body className={cn(
      "min-h-screen bg-background font-sans antialiased",
      fontSans.variable)}>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
