import { getWorld } from "@/data/get-world";
import Image from "next/image";
import React from "react";

const WorldPage = async () => {
  let world = null;
  let errorMessage = null;

  try {
    world = await getWorld(); // Fetch the world news
  } catch (error) {
    console.error("Error fetching world news:", error);
    errorMessage = "Failed to load world news. Please try again later."; // Error message for users
  }

  // If errorMessage exists, display it to the user
  if (errorMessage) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">World News</h1>
        <p className="text-red-500">{errorMessage}</p>{" "}
        {/* Display error message */}
      </div>
    );
  }

  // If world data is successfully fetched, display the articles
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">World News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {world.results.map((article, index) => (
          <div
            key={article.article_id || index}
            className="bg-white shadow p-4 rounded"
          >
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
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
    </div>
  );
};

export default WorldPage;
