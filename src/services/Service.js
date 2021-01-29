import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
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
  deleteShindig(id) {
    console.log("id = " + id);
    return apiClient.delete("/shindigs/" + id);
  }
};
