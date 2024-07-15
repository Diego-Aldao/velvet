import { useEffect, useState } from "react";

export default function FetchDataClient<T>(url: string) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      "x-rapidapi-host": "asos2.p.rapidapi.com",
    },
  };
  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      const result: T = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, loading, error };
}
