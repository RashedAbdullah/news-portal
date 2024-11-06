import { getNews } from "@/data/get-sports";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";

// Adding SEO metadata for better search visibility
export const metadata = {
  title: "Latest Sports News",
  description:
    "Stay updated with the latest sports news, including live scores, match highlights, sports analysis, and more from around the world.",
  openGraph: {
    type: "website",
    title: "Latest Sports News",
    description:
      "Stay updated with the latest sports news, including live scores, match highlights, sports analysis, and more from around the world.",
    images: [
      {
        url: "/favicon.png", // Replace with your image URL
        width: 1200,
        height: 630,
      },
    ],
    url: "https://sports-portal-global.vercel.app/sports", // Replace with your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Sports News",
    description:
      "Stay updated with the latest sports news, including live scores, match highlights, sports analysis, and more from around the world.",
    image: "/favicon.png", // Replace with actual image URL
  },
};

const SportsPage = async () => {
  let sports = null;
  let errorMessage = null;

  try {
    sports = await getNews(); // Fetch the sports news
  } catch (error) {
    console.error("Error fetching sports news:", error);
    errorMessage = "Failed to load sports news. Please try again later."; // Error message for users
  }

  // If errorMessage exists, display it to the user
  if (errorMessage) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">Latest Sports News</h2>
        <p className="text-red-500">{errorMessage}</p>{" "}
        {/* Display error message */}
      </div>
    );
  }

  // If sports data is successfully fetched, display the articles
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Latest Sports News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sports.results.map((article, index) => (
          <div
            key={article.article_id || index}
            className="bg-white shadow p-4 rounded"
          >
            {/* Structured Data Schema for SEO */}
            <NewsSchemaScript article={article} category="Sports" />
            <h1 className="text-xl font-semibold mb-2">{article.title}</h1>
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
