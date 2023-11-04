import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "CheckOff",
  description: "A Modern To-Do App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        {children}
      </body>
    </html>
  );
}
