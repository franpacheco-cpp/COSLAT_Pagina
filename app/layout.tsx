import type { Metadata } from "next";
import { VT323, Space_Mono, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const vt323 = VT323({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: '--font-vt323' 
});

const spaceMono = Space_Mono({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: '--font-space-mono' 
});

const libre = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-libre'
});

export const metadata: Metadata = {
  title: "COSLAT | Soberanía Latinoamericana",
  description: "Colectivo por la Soberanía Latinoamericana del Futuro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${vt323.variable} ${spaceMono.variable} ${libre.variable} font-mono bg-white text-coslat-blue antialiased flex flex-col md:flex-row min-h-screen`}>
        {/* Left Navigation */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 md:ml-64 w-full min-h-screen relative overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}