import { getWorld } from "@/data/get-world";
import NewsSchemaScript from "@/meta/news-meta-script";
import Image from "next/image";

// SEO Metadata for the page
export const metadata = {
  title: "World News",
  description:
    "Stay updated with the latest global news, including politics, economics, sports, and more. Explore world events, trends, and stories from around the globe.",
  openGraph: {
    type: "website",
    title: "World News",
    description:
      "Stay updated with the latest global news, including politics, economics, sports, and more. Explore world events, trends, and stories from around the globe.",
    images: [
      {
        url: "/favicon.png", // Replace with your image URL
        width: 1200,
        height: 630,
      },
    ],
    url: "https://yourwebsite.com/world", // Replace with your actual URL
  },
  twitter: {
    card: "summary_large_image",
    title: "World News",
    description:
      "Stay updated with the latest global news, including politics, economics, sports, and more. Explore world events, trends, and stories from around the globe.",
    image: "/favicon.png", // Replace with actual image URL
  },
};

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
        <h2 className="text-2xl font-bold mb-4">World News</h2>
        <p className="text-red-500" aria-live="assertive">
          {errorMessage}
        </p>{" "}
        {/* Display error message */}
      </div>
    );
  }

  // If world data is successfully fetched, display the articles
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">World News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {world.results.map((article, index) => (
          <div
            key={article.article_id || index}
            className="bg-white shadow p-4 rounded"
          >
            {/* Structured Data Schema for SEO */}
            <NewsSchemaScript article={article} category="World" />
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

export default WorldPage;
