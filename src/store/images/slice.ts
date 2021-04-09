import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WebImage, ImageState } from '@type/ImageTypes';

const initialState: ImageState = {
  images: [],
  page: 1,
};

export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    loadImages: (state: ImageState, action: PayloadAction<WebImage[]>) => {
      state.images = action.payload;
      state.page++;
    },
    loadMore: (state: ImageState, action: PayloadAction<WebImage[]>) => {
      state.images = [...state.images, ...action.payload];
      state.page++;
    },
  },
});

export const { loadImages, loadMore } = imageSlice.actions;

export const imagesSelector = (state: { images: ImageState }) => state.images;
// export const pageSelector = (state: { images: ImageState }) => state.images;

export default imageSlice.reducer;
