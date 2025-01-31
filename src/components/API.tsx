export const handleSearchSubmit = async (
  search: string,
  results: any,
  setResults: (results: any) => void
) => {
  try {
    const APIkey = "82c485cf126bc203fa9237948e6f79a9";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&lang=fr`
    );
    results = await response.json();
    setResults(results);
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
};
