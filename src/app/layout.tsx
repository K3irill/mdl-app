import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../shared/styles/globals.css";
import Header from '../widgets/Header/Header'
import StoreProvider from '../shared/store/provider'
import Footer from '../widgets/Footer/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <StoreProvider>
          <Header/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </StoreProvider>
      </body>
    </html>
  );
}
