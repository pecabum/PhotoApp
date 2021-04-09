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
