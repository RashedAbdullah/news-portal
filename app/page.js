import { getTop } from "@/data/get-top";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";

export default async function NewsHome() {
  let topNews = null;
  let errorMessage = null;

  try {
    topNews = await getTop(); // Fetch the top news
  } catch (error) {
    console.error("Error fetching top news:", error);
    errorMessage = "Failed to load top news. Please try again later."; // Error message for users
  }

  // If errorMessage exists, display it to the user
  if (errorMessage) {
    return (
      <main className="bg-gray-50 min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Top News</h1>
        <p className="text-red-500 text-center">{errorMessage}</p>{" "}
        {/* Display error message */}
      </main>
    );
  }

  // If topNews data is successfully fetched, display the articles
  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Top News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topNews.results.map((article, index) => (
          <div
            key={article.article_id || index}
            className="bg-white shadow-lg rounded-lg p-4"
          >
            {article.image_url && (
              <Image
                unoptimized
                width={300}
                height={200}
                src={article.image_url}
                alt={article.title}
                className="w-full h-auto mb-4 rounded"
              />
            )}
            <NewsSchemaScript article={article} category="Top news" />
            <h1 className="text-xl font-semibold text-gray-800 mb-2">
              {article.title}
            </h1>
            <p className="text-gray-500 text-sm mb-1">
              Published on: {new Date(article.pubDate).toLocaleString()}
            </p>
            <p className="text-gray-700 mb-3">
              {article.description || "No description available."}
            </p>
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
