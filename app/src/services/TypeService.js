import ApiClient from "@/services/ApiClient.js";

let TypeService = {
  list() {
    let typesRequest = ApiClient.get("/wp/v2/offers/types", {
      params: {
        orderby: "name",
        order: "asc"
      }
    });

    return typesRequest;
  }
};

export default TypeService;
