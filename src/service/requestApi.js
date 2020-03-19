import { post, get, put, patch } from "./Requestmanager";
export default {
  async postData(url, params) {
    const response = await post(url, params);
    return response.data;
  },

  async getData(url, params) {
    const response = await get(url, params);
    return response.data;
  },

  async updateData(url, params) {
    const response = await put(url, params);
    return response.data;
  },

  async patchData(url, params) {
    const response = await patch(url, params);
    return response.data;
  }
};
