import api from "./requestApi";
export default {
  async getAllEmployees() {
    try {
      const response = await api.getData("employees");
      return response;
    } catch (error) {
      return { success: false, data: [] };
    }
  }
};
