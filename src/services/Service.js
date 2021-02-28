import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3100",
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
  getTotalShindigs() {
    return apiClient.get("/shindigs/count");
  },
  getShindig(id) {
    return apiClient.get("/shindigs/id/" + id);
  },
  postShindig(shindig) {
    return apiClient.post("/shindigs", shindig);
  },
  putShindig(shindig) {
    console.log("Service.putShindig.shindig._id = " + shindig._id);
    console.log("Service.putShindig.shindig = " + JSON.stringify(shindig));
    let url = "/shindigs/" + shindig._id + "&" + JSON.stringify(shindig);
    console.log(url);
    return apiClient.put(url);
  },
  deleteShindig(id) {
    console.log("id = " + id);
    return apiClient.delete("/shindigs/" + id);
  }
};
