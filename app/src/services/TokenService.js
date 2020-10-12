import ApiClient from "@/services/ApiClient.js";

const TokenService = {
    get(email, password) {

        // J'envoi une requete HTTP de type post 
        let tokenRequest = ApiClient.post(
            "/jwt-auth/v1/token",
            {
                username: email,
                password: password
            }
        );

        return tokenRequest;
    }
};

export default TokenService;