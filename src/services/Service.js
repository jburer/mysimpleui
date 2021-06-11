import axios from "axios";

const apiClient = axios.create({
  //baseURL: "https://36p6foyeo9.execute-api.us-east-1.amazonaws.com/TEST",
  baseURL: "http://localhost:3100",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
    //  "X-Api-Key": "5UzCpLXuFi9QP5gM8OxDj2l5TZIazcyn39Tl9eHL"
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

    let url = "/shindigs/" + JSON.stringify(shindig);
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
