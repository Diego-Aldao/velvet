const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    "x-rapidapi-host": "asos2.p.rapidapi.com",
  },
};
const fetchData = async <T>(url: string) => {
  try {
    const response = await fetch(url, options);
    const result: T = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
