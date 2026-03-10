import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CollectionCard } from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";
import { useState } from "react";

const CollectionPage = () => {
  const collectioData = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const clearAll = () => {
    dispatch(clearCollection());
  };

  return (
    <div className=" overflow-auto px-10 py-6 black h-screen">
      {collectioData.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              setIsDialogOpen(true);
            }}
            className="active:scale-95 transition cursor-pointer text-white bg-red-600 px-6 py-2 text-lg font-semibold rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="text-6xl py-10 text-white text-shadow-lg/20 text-center font-medium z-10">
            Collection is Empty
          </h2>
          <Link
            to="/"
            className="text-3xl text-center w-25 bg-green-950 text-white border rounded px-3 py-1 active:scale-95 z-10"
          >
            Home
          </Link>
          <img
            src="/minion.jpg"
            alt="a minion holding tourch"
            className="-mt-52 h-165 w-126 border"
          />
        </div>
      )}

      {isDialogOpen && (
        // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/10 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <p className="text-lg font-semibold mb-4">
              Do you really want to delete this collection?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  clearAll();
                  setIsDialogOpen(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setIsDialogOpen(false);
                }}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-start w-full flex-wrap gap-6">
        {collectioData.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
