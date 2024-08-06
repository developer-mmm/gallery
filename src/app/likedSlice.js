// app/likedSlice.js
// src/app/likedSlice.js
import { createSlice } from '@reduxjs/toolkit';

const likedSlice = createSlice({
  name: 'liked',
  initialState: [],
  reducers: {
    addLikedImage: (state, action) => {
      state.push(action.payload);
    },
    removeLikedImage: (state, action) => {
      return state.filter(image => image !== action.payload);
    },
  },
});

export const { addLikedImage, removeLikedImage } = likedSlice.actions;
export default likedSlice.reducer;
