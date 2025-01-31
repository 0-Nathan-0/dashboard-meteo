import { useState } from "react";

type Props = {
  search: string;
  setSearch: (search: string) => void;
  onSearchSubmit: (search: string) => void;
};

export default function SearchBar({
  onSearchSubmit,
  search,
  setSearch,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchSubmit(search);
      setSearch("");
    }
  };

  const handleClick = () => {
    onSearchSubmit(search);
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
