import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

export const Tabs = () => {
  const tabs = ["photos", "videos", "GIF"];

  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs.map((tab, idx) => {
        return (
          <button
            className={`${activeTab === tab ? "bg-green-950" : "bg-gray-400"} text-white px-4 py-2 rounded uppercase cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(tab));
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
