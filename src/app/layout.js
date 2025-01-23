import "./globals.css";
import { Syne } from "next/font/google";
import { ReactLenis } from "lenis/react";
import { Jura } from "next/font/google";
import { Raleway } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-syne",
});
const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-jura",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Priyessh Rai - Software Developer",
  description: "Priyessh Rai - Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jura.variable} ${syne.variable} ${raleway.variable} bg-dot-white/[0.1]`}>
        <main className="main">
          <ReactLenis root>{children}</ReactLenis>
        </main>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  );
}
