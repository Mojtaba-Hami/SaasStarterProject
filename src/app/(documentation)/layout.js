import React from "react";
import DocumentationPage from "./documentation/page";
import DocumentationPageNavBar from "@/components/DocumentationPageComponents/DocumentationNavBar";
import "../(home)/globals.css";
import Footer from "@/components/Footer";

export default function DocumentaionLayout({ children }) {
  return (
    <html lang="en">
      <body className=" lg:mt-20 mt-15">
        <DocumentationPageNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
