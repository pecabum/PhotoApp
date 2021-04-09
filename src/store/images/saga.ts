import { PayloadAction } from '@reduxjs/toolkit';
import reactotron from 'reactotron-react-native';
import { put, select, takeLatest } from 'redux-saga/effects';
import { apiRequest } from '../../api';
import { WebImage } from '../../types/ImageTypes';
import { GetImagesAction, LoadMoreImagesAction } from './actions';
import { imagesSelector, loadImages, loadMore } from './slice';

function* getImages() {
  var images = yield apiRequest(
    'https://picsum.photos/v2/list?page=1&limit=10',
  );
  images = images.map((item: WebImage) => {
    return { ...item, url: item.download_url };
  });
  yield put(loadImages(images));
}

function* loadMoreImages({ payload }: PayloadAction<number>) {
  const { page } = yield select(imagesSelector);
  var images = yield apiRequest(
    `https://picsum.photos/v2/list?page=${page}&limit=10`,
  );
  images = images.map((item: WebImage) => {
    return { ...item, url: item.download_url };
  });
  yield put(loadMore(images));
}

function* imageSaga() {
  yield takeLatest(GetImagesAction.type, getImages);
  yield takeLatest(LoadMoreImagesAction.type, loadMoreImages);
}

export default imageSaga;