import ApiClient from "@/services/ApiClient.js";

const TokenService = {
  get(email, password) {
    // J'envoi une requete HTTP de type post pour récuperer l'email et le mot de passe
    let tokenRequest = ApiClient.post("/jwt-auth/v1/token", {
      username: email,
      password: password
    });

    return tokenRequest;
  },

  Validate(token) {
    let validateTokenRequest = ApiClient.post(
      "/jwt-auth/v1/token/validate",
      null,
      {
        header: {
          Authorization: "Bearer" + token
        }
      }
    );

    return validateTokenRequest;
  }
};

export default TokenService;
