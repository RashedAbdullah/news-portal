export const getTourism = async () => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&category=tourism`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};
