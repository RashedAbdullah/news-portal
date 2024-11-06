export const getLifeStyle = async () => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.API_KEY}&language=en&category=lifestyle`,
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
