import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexo Sports | Equipamiento Deportivo de Alta Calidad",
  description: "Tu tienda online de confianza para equipamiento deportivo. Descubre nuestra colección exclusiva de artículos deportivos de alta calidad con entrega rápida y garantía de satisfacción.",
  keywords: "Nexo Sports, equipamiento deportivo, deportes, tienda online, dropshipping, España",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
