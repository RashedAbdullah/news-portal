import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import "./globals.css";
import Navigtaions from "@/components/navigations";

export const metadata = {
  title: "Football Live Score",
  description: "Football live score",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-6921856465558245"
        ></meta>
      </head>
      <body className={`antialiased`}>
        <Analytics />
        <header className="bg-green-600 text-white shadow-md mb-4">
          <div className="text-center py-4">
            <h1 className="text-2xl font-bold">News Portal</h1>
            <p className="text-sm">Stay updated with the latest news</p>
          </div>
          <Navigtaions />
        </header>
        <div className="min-h-screen container mx-auto p-4">{children}</div>
        <footer className="text-center text-gray-600 mt-8 py-4">
          <p>&copy; 2024 News Portal. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
