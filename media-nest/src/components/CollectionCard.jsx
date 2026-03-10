import { useDispatch } from "react-redux";
import {
  removeCollection,
  removedToast,
} from "../redux/features/collectionSlice";

export const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removedToast());
  };

  return (
    <div className="w-[18vw] relative h-78 bg-white rounded-xl overflow-hidden">
      <a target="_blank" className="h-full" href={item.url}>
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white"
      >
        <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
          {item.title}
        </h2>
        <button
          className="bg-red-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium"
          onClick={() => {
            removeFromCollection(item);
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};
