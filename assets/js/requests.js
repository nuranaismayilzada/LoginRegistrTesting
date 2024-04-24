export const getAllData = async (url) => {
  const res = await axios(url);
  const data = res.data;
  return data;
};

export const getById = async (url, id) => {
  const res = await axios(url + "/" + id);
  const data = res.data;
  return data;
};

export const postData = async (url, obj) => {
  const res = await axios.post(url, obj);
};
