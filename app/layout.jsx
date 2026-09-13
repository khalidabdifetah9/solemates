import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400","500","600","700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SoleMates",
  description: "SoleMates crafts handmade footwear in Addis Ababa, blending traditional Ethiopian leatherwork with modern design. Shop durable, ergonomic shoes built to last.",
  icons:{
    icon:"/solemates_logo.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
