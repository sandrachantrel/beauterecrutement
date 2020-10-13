import axios from "axios";

// Je crée une instance d'AXIOS avec un chemin de base factorisé
let ApiClient = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL
});

export default ApiClient;
