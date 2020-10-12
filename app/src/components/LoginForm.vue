<template>
    <div class="loginForm">
        <h1>Connexion</h1>
        <!-- J'ajoute un écouteur d'événement de type submit avec preventDefault -->
        <form v-on:submit.prevent="submit()">
        <fieldset>
            <div class="field">
            <label for="email" class="field__label">Adresse e-mail</label>
            <!-- J'associe mon champ email à ma data grace à v-model -->
            <input
                v-model="email"
                class="field__input"
                type="text"
                placeholder="Votre e-mail"
            />
            </div>
            <div class="field field--error">
            <label for="password" class="field__label">Mot de passe</label>
            <input
                v-model="password"
                class="field__input"
                type="password"
                placeholder="Votre mot de passe"
            />
            </div>
        </fieldset>
        <button class="button">Connexion</button>
        </form>
    </div>
      
</template>

<script>
export default {
    name: "LoginForm",
    // création de mes datas qui vont etre liées à mes champs avec v-model
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        submit() {
            console.log("submit", this.email, this.password);
        }
    }
};
</script>

<style></style>