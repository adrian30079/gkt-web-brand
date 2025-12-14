import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const shanChaYaKai2 = localFont({
  src: "../public/font/font-2/ShanChaYaKai-2.ttf",
  variable: "--font-shan-cha-ya-kai-2",
  display: "swap",
  weight: "400",
});

const sweiHalfMoon = localFont({
  src: [
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-DemiLight.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/font-1/SweiHalfMoonCJKtc-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-swei-half-moon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "國坤堂 - 品牌設計方案",
  description: "探索國坤堂三種獨特的品牌視覺方向：古典雅韻、現代養生、尊貴典藏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${notoSansTC.variable} ${notoSerifTC.variable} ${shanChaYaKai2.variable} ${sweiHalfMoon.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
