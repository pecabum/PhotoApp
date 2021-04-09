export interface WebImage {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export interface ImageState {
  images: WebImage[];
  page: number;
}
