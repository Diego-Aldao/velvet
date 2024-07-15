const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d21104e158msh6bb3a0d94b8022dp130dc5jsn0d99ba3f8a12",
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
