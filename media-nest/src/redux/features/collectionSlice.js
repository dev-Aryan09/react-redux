import { createSlice } from "@reduxjs/toolkit";
import { Bounce, Slide, toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExist = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!alreadyExist) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },

    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },

    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },

    addedToast: () => {
      toast.success("added to container!", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    },
    removedToast: () => {
      toast.warn("removed from container!", {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    },
  },
});

export const {
  addCollection,
  removeCollection,
  clearCollection,
  addedToast,
  removedToast,
} = collectionSlice.actions;
export default collectionSlice.reducer;
