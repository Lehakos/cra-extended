// @flow
import axios from 'axios';

export const request = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
