import { useState} from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const onSearchSubmit = async (search: string) => {
    try {
      const APIkey = "82c485cf126bc203fa9237948e6f79a9";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIkey}&lang=fr`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <>
      <div>
        <SearchBar
          onSearchSubmit={onSearchSubmit}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <div>
        <SearchResult results={results} />
      </div>
    </>
  );
}

export default App;
