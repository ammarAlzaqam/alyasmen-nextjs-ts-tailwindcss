import "./globals.css";
import 'animate.css';

import { Inter, Zain } from "next/font/google";
export const metadata = {
  title: "الياسمين للتشطيبات والديكور",
  description:
    "أفضل شركة تشطيبات وديكور بلمسة فخامة وأناقة. نقدّم حلول هندسية وتشطيبات متكاملة بتصميمات دقيقة وجودة تنفيذ عالية.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const zain = Zain({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-zain",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${inter.variable} ${zain.variable} text-start bg-primary-50`}
    >
      <body>{children}</body>
    </html>
  );
}
