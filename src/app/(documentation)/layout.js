// Why? 👇
import "../(home)/globals.css";
import Footer from "@/components/layout/Footer";
import DocumentationPageNavBar from "@/components/modules/documentation/DocumentationNavBar";

export default function DocumentaionLayout({ children }) {
  return (
    <html lang='en'>
      <body className=' lg:mt-20 mt-15'>
        <DocumentationPageNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
