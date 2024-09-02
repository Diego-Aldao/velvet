import type { Metadata } from "next";
import { Nunito_Sans, Raleway } from "next/font/google";
import "@/globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { ProductProvider } from "@/context/ProductsContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "sonner";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
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
      <body className={`${raleway.className} ${nunitoSans.variable}`}>
        <Toaster />
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <ProductProvider>
            <Header />
            {children}
            <Footer />
          </ProductProvider>
        </SkeletonTheme>
      </body>
    </html>
  );
}
