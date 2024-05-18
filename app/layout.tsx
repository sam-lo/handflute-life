import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HKHFA",
  description: "Official site of Hong Kong Handflute Association",
  metadataBase: new URL("https://handflute.life"),
  openGraph: {
    siteName: "Hong Kong Handflute Association",
    type: "website",
    locale: "zh_HK"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "Hong Kong Handflute Association",
  appleWebApp: {
    title: "Hong Kong Handflute Association",
    statusBarStyle: "default",
    capable: true
  },
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
    <html lang="en">
    <body className={inter.className}>
    <link rel="icon" href="/public/favicon.ico" sizes="any"/>
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>
  );
}
