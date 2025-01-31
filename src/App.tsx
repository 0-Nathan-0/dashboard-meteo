import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { handleSearchSubmit } from "./components/API";

function App() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const onSearchSubmit = () => {
    handleSearchSubmit(search, results, setResults);
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
        <SearchResult search={search} results={results} />
      </div>
    </>
  );
}

export default App;
