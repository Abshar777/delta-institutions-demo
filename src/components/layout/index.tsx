"use client";
import React, { useState, useEffect, Suspense } from "react";
import Preloader from "./preloader";
import Cursor from "../global/cursor";
import Header from "../global/header";
import Footer from "../global/footer";
import { Toaster } from "sonner";
import WhatsappButton from "../global/whatsapp";
import ReactQueryProvider from "../providers/react-query";

const Indexlayout = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <ReactQueryProvider>
        {/* <Toaster position="top-center" /> */}
        <Preloader />
        <Header />
        <WhatsappButton />
        {/* <Cursor /> */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="o-hidden">
              <Suspense fallback={<div></div>}>{children}</Suspense>
              <Footer />
            </main>
          </div>
        </div>
      </ReactQueryProvider>
    </>
  );
};

export default Indexlayout;
