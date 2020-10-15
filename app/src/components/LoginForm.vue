<template>
    <!-- J'ajoute un écouteur d'événement de type submit avec preventDefault -->
    <form v-on:submit.prevent="submit()">
      <fieldset>
        <div
          class="field"
          v-bind:class="{ 'field--error': errors.email.length !== 0 }"
        >
          <label class="field__label">Adresse e-mail</label>
          <!-- J'associe mon champ email à ma data grace à v-model -->
          <input
            v-model="email"
            class="field__input"
            type="text"
            placeholder="Votre e-mail"
          />
          <!-- avec v-if on verifie s'il y a des choses dans l'imput alors on affiche le ul sinon on l'affiche pas -->
          <ul class="field__error-list" v-if="errors.email.length">
            <li v-for="(error, index) in errors.email" v-bind:key="index">
              {{ error }}
            </li>
          </ul>
        </div>
        <div
          class="field"
          v-bind:class="{ 'field--error': errors.password.length !== 0 }"
        >
          <label class="field__label">Mot de passe</label>
          <input
            v-model="password"
            class="field__input"
            type="password"
            placeholder="Votre mot de passe"
          />
          <ul class="field__error-list" v-if="errors.password.length">
            <li v-for="(error, index) in errors.password" v-bind:key="index">
              {{ error }}
            </li>
          </ul>
        </div>
      </fieldset>

      <div v-if="apiError" class="alert error">{{ apiError }}</div>
      <button class="button">Connexion</button>
    </form>
</template>

<script>
export default {
  name: "LoginForm",
  // création de mes datas qui vont etre liées à mes champs avec v-model
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: [],
        password: []
      },
      apiError: ""
    };
  },
  methods: {
    submit() {
      // Je remets les erreurs à vide
      this.apiError = "";

      let isValide = this.validate();

      if (isValide) {
        // J'appel l'action connect de mon store grâce à dispatch
        // Recuperation de la promesse dans le loginForm comme quoi l'user est bien connecté  
        let connectRequest = this.$store.dispatch(
          "connect", {
            email: this.email,
            password: this.password
          });

          // Ce then gère les intéraction de la view
          connectRequest.then(response => {
            // Si la réponse est un succès
            if ( response.data.success) {
              // Je redirige vers la page d'accueil
              this.$router.push({ name: "Home" });
            } else {
              this.apiError = response.data.message;
            }
          });
      }
    },

    // Méthode me permettant de valider les champs du formulaire de connexion
    validate() {
      // A chaque nouvelle validation je vide mon tableau d'erreurs pour réactualiser les erreurs du formulaire
      this.errors = {
        email: [],
        password: []
      };

      let isValide = true;

      let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      // Je test que l'email n'est pas vide
      if (this.email.length === 0) {
        isValide = false;
        this.errors.email.push("Merci de renseigner votre email.");
        // Je test que l'email est valide
      } else if (!emailRegex.test(this.email)) {
        isValide = false;
        this.errors.email.push("L'email n'est pas valide.");
      }

      // Je test que le mot de passe ne soit pas vide
      if (this.password.length === 0) {
        isValide = false;
        this.errors.password.push("Merci de renseigner votre mot de passe.");
      }

      return isValide;
    }
  }
};
</script>

<style lang="scss">
.field {
  padding: 1rem;
  &__label {
    padding: 1rem;
  }
  &__imput {
    padding: 2rem;
  }
}

.button {
    font-size: 15px;
    text-transform: uppercase;
    margin: 1rem;
    padding: 0.5rem;
  }

</style>
