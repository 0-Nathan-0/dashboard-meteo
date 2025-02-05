import { useState} from "react";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { onSearchSubmit } from "./functions/API";

function App() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const handleSearchSubmit = async (search: string) =>
  {
    const data = await onSearchSubmit(search);
    setResults(data);
  }

  return (
    <>
      <div>
        <SearchBar
          handleSearchSubmit={handleSearchSubmit}
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
