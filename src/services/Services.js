import axios from "axios";

class Services {
  constructor(endpoint) {
    this._url = "";
    this._api = axios.create({
      baseURL:
        "http://35.169.247.105:8080" + endpoint,
      timeout: 100000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
  }
}

export default Services;