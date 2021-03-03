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
    console.log("\nService.getShindigs() ... start");
    page = page - 1;
    let url = "/shindigs?_limit=" + perPage + "&_page=" + page;
    console.log(" ... Service.getShindigs() url = " + url);
    return apiClient.get(url);
  },
  getShindigsTotal() {
    console.log("\nService.getShindigsTotal() ... start");
    return apiClient.get("/shindigs/count");
  },
  getShindig(id) {
    console.log("\nService.getShindigs() ... start");
    let url = "/shindigs/id/" + id;
    console.log(url);
    return apiClient.get(url);
  },
  postShindig(shindig) {
    console.log("\nService.postShindig() ... start");
    return apiClient.post("/shindigs", shindig);
  },
  putShindig(shindig) {
    console.log("\nService.putShindig() ... start");
    console.log(" ... Service.putShindig.shindig.id = " + shindig.id);
    console.log(" ... Service.putShindig.shindig = " + JSON.stringify(shindig));
    let url = "/shindigs/" + shindig.id + "&" + JSON.stringify(shindig);
    console.log(url);
    return apiClient.put(url);
  },
  deleteShindig(id) {
    console.log("\nService.deleteShindig() ... start");
    let url = "/shindigs/id/" + id;
    console.log(url);
    return apiClient.delete(url);
  }
};
