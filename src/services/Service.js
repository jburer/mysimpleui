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
    console.log("Service.putShindig.shindig.id = " + shindig.id);
    let myArray = JSON.parse(shindig);
    myArray.shift();
    console.log("Service.putShindig.shindig = " + JSON.stringify(myArray));
    let url = "/shindigs/" + shindig.id + "&" + JSON.stringify(myArray);
    console.log(url);
    return apiClient.put(url);
  },
  deleteShindig(id) {
    console.log("id = " + id);
    return apiClient.delete("/shindigs/" + id);
  }
};
