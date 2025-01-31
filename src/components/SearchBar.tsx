import { useState } from "react";
import SearchResult from "./SearchResult";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      SearchResult;
      setSearch("");
    }
  };

  const handleClick = () => {
    SearchResult;
    setSearch("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClick}>Ajouter</button>
    </div>
  );
}
