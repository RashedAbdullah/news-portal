import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Football Live Scrore",
  description: "Football live score",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {/* Header */}
        <header className="bg-green-600 text-white text-center py-4 shadow-md mb-4">
          <h1 className="text-2xl font-bold">News Portal</h1>
          <p className="text-sm">Stay updated with the latest news</p>
        </header>
        <div className="min-h-screen"> {children}</div>
        <footer className="text-center text-gray-600 mt-8">
          <p>&copy; 2024 News Portal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
