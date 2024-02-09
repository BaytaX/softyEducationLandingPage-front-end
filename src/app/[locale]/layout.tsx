import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Softy Education - Home",
  description:
    "Embark on a transformative journey with Softy Education, where learning becomes an immersive experience. Whether you're diving into programming, web development, artificial intelligence, or other cutting-edge technologies, our platform is tailored to meet your unique needs.",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`${archivo.className} `}>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
