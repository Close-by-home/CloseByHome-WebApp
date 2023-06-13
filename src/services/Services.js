import axios from "axios";

class Services {
  constructor(endpoint) {
    this._url = "";
    this._api = axios.create({
      baseURL:
      "https://localhost:8443" + endpoint,
        // "https://closebyhome.zapto.org:8443" + endpoint,
      timeout: 100000,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      }
    })
  }
}

export default Services;
