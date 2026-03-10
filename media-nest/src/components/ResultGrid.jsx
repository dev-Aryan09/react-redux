import { useDispatch, useSelector } from "react-redux";
import {
  setQuery,
  setActiveTab,
  setResults,
  setLoading,
  setError,
} from "../redux/features/searchSlice";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import { useEffect } from "react";
import { ResultCard } from "./ResultCard";

export const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab === "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url: item.links.html,
          }));
        }
        if (activeTab === "videos") {
          let response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }
        if (activeTab === "GIF") {
          let response = await fetchGifs(query);
          data = response.data.map((item) => ({
            id: item.id,
            type: item.type,
            title: item.title || "GIF",
            thumbnail: item.images.downsized_still.url,
            src: item.images.downsized.url,
            url: item.url,
          }));
          // console.log("hey", data);
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.response?.data || err.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error)
    return (
      <h1 className="text-red-600 text-3xl p-2 flex justify-center">Error</h1>
    );
  if (loading)
    return (
      <h1 className="text-red-600 text-3xl p-2 flex justify-center">
        Loading...
      </h1>
    );

  return (
    <div className="flex justify-between w-full flex-wrap gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};
