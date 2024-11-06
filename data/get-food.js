export const getFood = async () => {
  const res = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_58337de68dd63520271f9de2ee196ae296fe9&language=en&category=food`,
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
