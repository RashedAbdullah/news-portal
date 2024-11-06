import { getTourism } from "@/data/get-tourism";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";

// Adding SEO metadata for better search visibility
export const metadata = {
  title: "Tourism News",
  description:
    "Stay updated with the latest news on tourism, travel destinations, hotel reviews, and more. Explore travel guides, tips, and tourism updates from around the world.",
  openGraph: {
    type: "website",
    title: "Tourism News",
    description:
      "Stay updated with the latest news on tourism, travel destinations, hotel reviews, and more. Explore travel guides, tips, and tourism updates from around the world.",
    images: [
      {
        url: "/favicon.png", // Replace with your image URL
        width: 1200,
        height: 630,
      },
    ],
    url: "https://yourwebsite.com/tourism", // Replace with your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Tourism News",
    description:
      "Stay updated with the latest news on tourism, travel destinations, hotel reviews, and more. Explore travel guides, tips, and tourism updates from around the world.",
    image: "/favicon.png", // Replace with actual image URL
  },
};

const TourismPage = async () => {
  let tourism = null;
  let errorMessage = null;

  try {
    tourism = await getTourism(); // Fetch the tourism news
  } catch (error) {
    console.error("Error fetching tourism news:", error);
    errorMessage = "Failed to load tourism news. Please try again later."; // Error message for users
  }

  // If errorMessage exists, display it to the user
  if (errorMessage) {
    return (
      <div className="bg-gray-100 min-h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">Tourism News</h2>
        <p className="text-red-500" aria-live="assertive">
          {errorMessage}
        </p>{" "}
        {/* Display error message */}
      </div>
    );
  }

  // If tourism data is successfully fetched, display the articles
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Tourism News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tourism.results.map((article, index) => (
          <div
            key={article.article_id || index}
            className="bg-white shadow p-4 rounded"
          >
            {/* Structured Data Schema for SEO */}
            <NewsSchemaScript article={article} category="Tourism" />
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
    </div>
  );
};

export default TourismPage;
