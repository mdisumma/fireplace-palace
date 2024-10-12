"use client";
import { useState } from "react";
import { Aleo } from "next/font/google";
import "./globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/footer.js";

const aleo = Aleo({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleo.className}>
        <Header />
        {/* "/", "/founders" */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
