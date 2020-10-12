import ApiClient from "@/services/ApiClient.js";

let MediaService = {
    get(mediaId) {
        let mediaRequest = ApiClient.get( 
            "/wp/v2/media/" +
            mediaId);

        return mediaRequest;
    }
};

export default MediaService;