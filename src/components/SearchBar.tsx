import { useState } from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
  handleSearchSubmit: (search: string) => void;
};

export default function SearchBar({
  handleSearchSubmit
}: Props) {
  const [search, setSearch] = useState<string>("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit(search);
      setSearch("");
    }
  };

  const handleClick = () => {
    handleSearchSubmit(search);
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
