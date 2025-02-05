export const onSearchSubmit = async (search: string) => {
    try {
      const APIkey = "82c485cf126bc203fa9237948e6f79a9";
      console.log(search);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&lang=fr`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
};