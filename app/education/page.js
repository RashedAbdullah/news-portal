import { getEducation } from "@/data/get-education";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";
import React from "react";

// The new metadata format in Next.js 14
export const metadata = {
  title: "Education News",
  description:
    "Stay updated with the latest education news, trends, research, and developments in schools, universities, and online learning platforms.",
  openGraph: {
    type: "website",
    title: "Education News",
    description:
      "Stay updated with the latest education news, trends, research, and developments in schools, universities, and online learning platforms.",
    images: [
      {
        url: "/favicon.png", // Replace with an appropriate image URL
        width: 1200,
        height: 630,
      },
    ],
    url: "https://news-portal-global.vercel.app/education", // Replace with the actual page URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Education News",
    description:
      "Stay updated with the latest education news, trends, research, and developments in schools, universities, and online learning platforms.",
    image: "/favicon.png", // Replace with the actual image URL
  },
};

const EducationNewsPage = async () => {
  let educationNews;
  let errorMessage = null;

  try {
    educationNews = await getEducation();
  } catch (error) {
    console.error("Failed to fetch education news:", error);
    errorMessage = "Failed to load education news. Please try again later.";
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Education News</h2>

      {/* Display error message if there's an error */}
      {errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationNews?.results?.map((article, index) => (
            <div
              key={article.article_id || index}
              className="bg-white shadow p-4 rounded"
            >
              {/* Structured Data Schema for SEO */}
              <NewsSchemaScript article={article} category="Education" />
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

export default EducationNewsPage;
