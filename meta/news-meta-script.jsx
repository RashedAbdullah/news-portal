const NewsSchemaScript = ({ article, category }) => {
  const newsSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article?.title,
    image: article?.image_url ? article?.image_url : "/favicon.png",
    author: {
      "@type": "Person",
      name: article?.author || "Rashed Abdullah",
      url: "https://rashedabdullah.com",
    },
    publisher: {
      "@type": "Organization",
      name: "News Portal",
      logo: {
        "@type": "ImageObject",
        url: "https://i.ibb.co/GkdZpf8/IMG-20240621-WA0029-Copy.jpg",
      },
    },
    datePublished: article?.pubDate || new Date().toISOString(),
    description: article?.description || "No description available.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://news-portal-global.vercel.app/${category.toLowerCase()}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(newsSchema, null, 2),
      }}
    />
  );
};

export default NewsSchemaScript;
