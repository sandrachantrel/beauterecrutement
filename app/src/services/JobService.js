import ApiClient from "@/services/ApiClient.js";

let JobService = {
    list() {
        let jobsRequest = ApiClient.get( 
            "/wp/v2/offers/jobs",
            {
                params: {
                    orderby: "name",
                    order: "asc"
                }
            }
        );

        return jobsRequest;
    }
}

export default JobService;