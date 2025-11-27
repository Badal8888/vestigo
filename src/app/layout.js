import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Vestigo Insurance",
  description: "Corporate & Industrial Insurance Advisory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {/* Keep this padding (header height space) */}
        <main className="pt-24 min-h-screen bg-white">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
