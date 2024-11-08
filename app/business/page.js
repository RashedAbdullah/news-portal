import { getBusiness } from "@/data/get-business";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";
import React from "react";

// The new metadata format in Next.js 14
export const metadata = {
  title: "Business News",
  description:
    "Stay updated with the latest business news, articles, and insights on the global economy, finance, and market trends.",
  openGraph: {
    type: "website",
    title: "Business News",
    description:
      "Stay updated with the latest business news, articles, and insights on the global economy, finance, and market trends.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://news-portal-global.vercel.app/business",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business News",
    description:
      "Stay updated with the latest business news, articles, and insights on the global economy, finance, and market trends.",
    image: "/favicon.png",
  },
};

const BusinessNewsPage = async () => {
  let businessNews;
  let errorMessage = null;

  try {
    businessNews = await getBusiness();
  } catch (error) {
    console.error("Failed to fetch business news:", error);
    errorMessage = "Failed to load business news. Please try again later.";
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Business News</h2>

      {/* Show error message if there's a fetching error */}
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessNews?.results?.map((article, index) => (
            <div
              key={article.article_id || index}
              className="bg-white shadow p-4 rounded"
            >
              {/* Structured Data Schema for SEO */}
              <NewsSchemaScript article={article} category="Business" />
              <h1 className="text-xl font-semibold mb-2">{article.title}</h1>
              {article.image_url && (
                <Image
                  unoptimized
                  width={300}
                  height={200}
                  src={article.image_url}
                  alt={article.title}
                  className="w-full h-auto mb-2 rounded"
                />
              )}
              <p className="text-gray-500 text-sm mb-1">
                Published on: {new Date(article.pubDate).toLocaleString()}
              </p>
              <p className="text-gray-700">
                {article.description || "No description available."}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-2 inline-block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusinessNewsPage;
