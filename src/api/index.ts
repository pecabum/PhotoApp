const BASE_URL = 'https://picsum.photos';

export const getImagesUrl = (page: number) => {
  return BASE_URL + `/v2/list?page=${page}&limit=10`;
};

const getResponseWithStatus = (res: any) => {
  const status = res.status;
  return res.json().then((result: any) => {
    result.status = status;
    return result;
  });
};

export const apiRequest = async (url: string) => {
  return fetch(url)
    .then(getResponseWithStatus)
    .catch(error => error);
};
