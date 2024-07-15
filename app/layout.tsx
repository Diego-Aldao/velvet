import type { Metadata } from "next";
import { Inter_Tight, Nunito_Sans } from "next/font/google";
import "@/globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  style: "normal",
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Velvet — Tienda Online",
  description: "Lo ultimo en ropa y moda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${nunitoSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
