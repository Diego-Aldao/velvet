import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Ephesis } from "next/font/google";
import "@/globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { ProductProvider } from "@/context/ProductsContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { Toaster } from "sonner";
import { Providers } from "@/providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  style: "normal",
});
const ephesis = Ephesis({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ephesis",
  style: "normal",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
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
    <html lang="es" className="dark">
      <body
        className={`${playfairDisplay.variable} ${ephesis.variable} ${plusJakartaSans.variable}`}
      >
        <Providers>
          <Toaster />
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <ProductProvider>
              <Header />
              {children}
              <Footer />
            </ProductProvider>
          </SkeletonTheme>
        </Providers>
      </body>
    </html>
  );
}
