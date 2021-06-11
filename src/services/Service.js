import axios from "axios";

const apiClient = axios.create({
  //baseURL: "http://10.0.1.92:3100",
  baseURL: "http://3.85.25.219:3100",
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
    console.log(" ... Service.getShindigs() url = " + url);
    return apiClient.get(url);
  },
  postShindig(shindig) {
    console.log("\nService.postShindig() ... start");

    return apiClient.post("/shindigs", shindig);
  },
  putShindig(shindig) {
    console.log("\nService.putShindig() ... start");

    let url = "/shindigs/" + shindig.id + "&" + JSON.stringify(shindig);
    console.log(" ... Service.putShindig() url = " + url);
    return apiClient.put(url);
  },
  deleteShindig(id) {
    console.log("\nService.deleteShindig() ... start");

    let url = "/shindigs/id/" + id;
    console.log(" ... Service.deleteShindig() url = " + url);
    return apiClient.delete(url);
  }
};
