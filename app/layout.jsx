import { Geist, Poppins,Racing_Sans_One } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/Shoes/NavBar";

const racing = Racing_Sans_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-racing",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "SoleMates",
  description:
    "SoleMates crafts handmade footwear in Addis Ababa, blending traditional Ethiopian leatherwork with modern design. Shop durable, ergonomic shoes built to last.",
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${poppins.variable} ${racing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
