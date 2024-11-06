import { getLifeStyle } from "@/data/get-life-style";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";
import React from "react";

// Adding SEO metadata for better search visibility
export const metadata = {
  title: "Lifestyle News",
  description:
    "Stay updated with the latest lifestyle news, trends, fashion tips, wellness advice, and lifestyle articles to enhance your everyday life.",
  openGraph: {
    type: "website",
    title: "Lifestyle News",
    description:
      "Stay updated with the latest lifestyle news, trends, fashion tips, wellness advice, and lifestyle articles to enhance your everyday life.",
    images: [
      {
        url: "/favicon.png", // Replace with an appropriate image URL for your site
        width: 1200,
        height: 630,
      },
    ],
    url: "https://news-portal-global.vercel.app/lifestyle", // Replace with your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifestyle News",
    description:
      "Stay updated with the latest lifestyle news, trends, fashion tips, wellness advice, and lifestyle articles to enhance your everyday life.",
    image: "/favicon.png", // Replace with actual image URL
  },
};

const LifestylePage = async () => {
  let lifestyle;
  let errorMessage = null;

  try {
    lifestyle = await getLifeStyle();
  } catch (error) {
    console.error("Failed to fetch lifestyle news:", error);
    errorMessage = "Failed to load lifestyle news. Please try again later.";
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Lifestyle News</h2>

      {/* Display error message if there's an error */}
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lifestyle?.results?.map((article, index) => (
            <div
              key={article.article_id || index}
              className="bg-white shadow p-4 rounded"
            >
              {/* Structured Data Schema for SEO */}
              <NewsSchemaScript article={article} category="Lifestyle" />
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
              <p className="text-gray-700 mb-2">
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

export default LifestylePage;
