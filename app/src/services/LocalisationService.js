import ApiClient from "@/services/ApiClient.js";

let LocalisationService = {
  list() {
    let localisationRequest = ApiClient.get("/wp/v2/offers/localisations", {
      params: {
        orderby: "name",
        order: "asc"
      }
    });

    return localisationRequest;
  }
};

export default LocalisationService;
