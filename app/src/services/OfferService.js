import ApiClient from "@/services/ApiClient.js";

let OfferService = {
    list() {
        let offerRequest = ApiClient.get(
            "/wp/v2/offers"
        );

        return offerRequest;
    }
};

export default OfferService;