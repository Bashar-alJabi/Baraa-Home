import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/NavBar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Poppins } from "next/font/google";
import "./globals.css";

const bodyFont = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Baraa's Home",
  description: "Baraa's Home Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="max-w-7xl min-h-screen my-0 mx-auto pt-14 pb-2 px-4 flex flex-col justify-between">
              <NavBar />
              {children}
              <Footer />
						</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
