import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Featured from "./components/Featured/Featured";
import CardList from "./components/CardList/CardList";
import CategoryList from "./components/CategoryList/CatogoryList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poopoocupcake",
  description: "My hard work will reward me some day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar/>
              {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
