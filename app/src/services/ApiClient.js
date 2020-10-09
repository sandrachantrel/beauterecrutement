import axios from "axios";

let ApiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
});

export default ApiClient;