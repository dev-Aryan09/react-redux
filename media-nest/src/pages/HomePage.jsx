import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import { Tabs } from "../components/Tabs";
import { ResultGrid } from "../components/ResultGrid";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  return (
    <div>
      <Navbar />
      <SearchBar />

      {query === "" ? (
        <h1 className="text-6xl font-medium text-shadow-lg/20 flex justify-center mt-40">
          Welcome!
        </h1>
      ) : (
        <div className="black">
          <Tabs />
          <ResultGrid />
        </div>
      )}
    </div>
  );
};

export default HomePage;
