import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-full w-full bg-black text-white py-8 px-10">
      <Link to="/" className="font-medium text-2xl">
        Media<span className="text-4xl italic font-semibold">Nest</span>
      </Link>
      <div className="flex gap-5 text-xl items-center">
        <Link
          className="text-base font-medium active:scale-95 bg-green-950 rounded px-3 py-1.5 border"
          to="/"
        >
          Search
        </Link>
        <Link
          className="text-base font-medium active:scale-95 bg-green-950 rounded px-3 py-1.5 border"
          to="/collection"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
