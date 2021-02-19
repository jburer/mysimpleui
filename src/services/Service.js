import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getShindigs(perPage, page) {
    return apiClient.get("/shindigs?_limit=" + perPage + "&_page=" + page);
  },
  getShindig(id) {
    return apiClient.get("/shindigs/" + id);
  },
  postShindig(shindig) {
    return apiClient.post("/shindigs", shindig);
  },
  patchShindig(shindig) {
    console.log("Service.postUpdateShindig.shindig.id = " + shindig.id);
    return apiClient.put("/shindigs/" + shindig.id, shindig);
  },
  deleteShindig(id) {
    console.log("id = " + id);
    return apiClient.delete("/shindigs/" + id);
  }
};
