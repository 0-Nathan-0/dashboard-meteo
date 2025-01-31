import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <SearchResult searched={searched} />
      </div>
    </>
  );
}

export default App;
