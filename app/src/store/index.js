import Vue from "vue";
import Vuex from "vuex";

import TokenService from "@/services/TokenService.js";

import ApiClient from "@/services/ApiClient.js";

Vue.use(Vuex);

export default new Vuex.Store({
  // State = source d'information unique / stock les données 
  state: {
    // Je stocke dans le state les informations du user connecté
    user: null
  },
  // Le store centralise tous les getters puis nous les utiliserons dans les composant grâce au ...mapGetters (opérateur de décomposition)
  // Permet d'acceder plus facilement à nos données
  getters: {
    user: state => {
      return state.user;
    },
    isConnected: (state, getters) => {
      // fonction qui utilise le getter user pour verifier si l'utilisateur est connecté ou non 
      return getters.user !== null;
    }
  },
  // Mutation = permet de modifier le state
  mutations: {
    // Mutation du state en mode connecté en stockant l'utilisateur connecté
    CONNECTION(state, user) {
      state.user = user;
    },
    // Mutation du state en mode déconnecté en supprimant les informations du user
    DISCONNECTION(state) {
      state.user = null;
    }
  },
  // Permet d'effectuer des traitement asynchrome cad via une action du store on vient modifier le state
  // Au lieu de modifier l'etat, les actions actent des mutations
  actions: {
    connect(context, credentials) {
      // Requete à l'API pour recuperer les informations et authentifier notre user
      let tokenRequest = TokenService.get(
        credentials.email,
        credentials.password
      );

       // Ce then gère la connexion du user
       tokenRequest.then(response => {

        // Si la réponse est un succès (utilisateur connecté)
        if (response.data.success) {

          // Je stocke le token dans le sessionStorage en attendant d'être en local sinon stocker dans un cookie en https pour + de sécurité
          sessionStorage.setItem("token", response.data.data.token);
        
          // Déclenche le changement d'etat / passe l'application en mode connecté grâce au getter isConnected propagé sur les différents composants
          let user = response.data.data;
          context.commit("CONNECTION", user);

          // Je crée l'en-tête Authorization avec le token afin d'authentifier toutes les futures requêtes HTTP à l'API
          ApiClient.defaults.headers.common["Authorization"] = "Bearer " + user.token;
       }
        // J'envoie tout le contenu de la réponse dans le prochain then envoyé dans le loginForm
        return response;
        });
  
        return tokenRequest;
      },

      disconnect(context) {
        // Je supprime le token du session storage
        sessionStorage.removeItem("token");
  
        // Je supprime l'en-tête Authorization des futures requêtes HTTP à l'API
        delete ApiClient.defaults.headers.common["Authorization"];
  
        // Je passe mon application en mode déconnectée
        context.commit("DISCONNECTION");
      },

      // Permet de stock le token de l'user connecté pour qu'il soit directement associé à l'API à chaque requete dans le header
      reconnect(context) {
        let token = sessionStorage.getItem("token");
  
        if (token) {
          let validateTokenRequest = TokenService.validate(token);
  
          validateTokenRequest.then(response => {
            if (response.data.success) {
              let user = response.data.data;
              context.commit("CONNECTION", user);
  
              ApiClient.defaults.headers.common["Authorization"] = "Bearer " + token;
            } else {
              // Si le token est invalide, je le supprime du sessionStorage
              sessionStorage.removeItem("token");
            }
          });
        }
    }
  },
  modules: {}
});
