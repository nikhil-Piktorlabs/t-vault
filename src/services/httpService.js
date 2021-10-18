import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  alert("Error");

  return Promise.reject(error);
});

const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  request: axios.request,
};

export default http;
