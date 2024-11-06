import { getNews } from "@/data/get-sports";
import Image from "next/image";
import React from "react";

const SportsPage = async () => {
  const sports = await getNews();
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Sports News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sports.results.map((article, index) => (
          <div
            key={article.article_id || index}
            className="bg-white shadow p-4 rounded"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            {article.image_url && (
              <Image
                src={article.image_url}
                alt={article.title}
                width={300}
                height={200}
                unoptimized
                className="w-full h-auto mb-2"
              />
            )}
            <p className="text-gray-500 text-sm mb-1">
              Published on: {new Date(article.pubDate).toLocaleString()}
            </p>
            <p className="text-gray-700">
              {article.description || "Description not available."}
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
    </div>
  );
};

export default SportsPage;
