import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigtaions from "@/components/navigations";

export const metadata = {
  title: "News Portal",
  description:
    "Stay updated with the latest news across football, politics, lifestyle, and more.",
  openGraph: {
    title: "News Portal",
    description:
      "Stay updated with the latest news across football, politics, lifestyle, and more.",
    url: "https://news-portal-global.vercel.app",
    type: "website",
    image: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "News Portal",
    description:
      "Stay updated with the latest news across football, politics, lifestyle, and more.",
    image: "/favicon.png",
  },
  keywords:
    "football, lifestyle, politics, sports news, breaking news, latest updates, news portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Stay updated with the latest news across football, politics, lifestyle, and more."
        />
        <meta name="author" content="News Portal" />
        <meta
          name="keywords"
          content="football, lifestyle, politics, sports news, breaking news, latest updates, news portal"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="News Portal" />
        <meta
          property="og:description"
          content="Stay updated with the latest news across football, politics, lifestyle, and more."
        />
        <meta
          property="og:url"
          content="https://news-portal-global.vercel.app"
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="News Portal" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest news across football, politics, lifestyle, and more."
        />
        <meta name="twitter:image" content="/favicon.png" />

        {/* Google Adsense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6921856465558245"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-6921856465558245"
        ></meta>

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "News Portal",
              url: "https://news-portal-global.vercel.app",
              description:
                "Stay updated with the latest news across football, politics, lifestyle, and more.",
              publisher: {
                "@type": "Organization",
                name: "News Portal",
                logo: {
                  "@type": "ImageObject",
                  url: "/favicon.png",
                },
              },
            }),
          }}
        ></script>

        <title>News Portal - Stay Updated with the Latest News</title>
      </head>

      <body className={`antialiased`}>
        <Analytics />
        <header className="bg-green-600 text-white shadow-md mb-4">
          <div className="text-center py-4">
            <h1 className="text-2xl font-bold">News Portal</h1>
            <p className="text-sm">
              Stay updated with the latest news across football, politics,
              lifestyle, and more.
            </p>
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
