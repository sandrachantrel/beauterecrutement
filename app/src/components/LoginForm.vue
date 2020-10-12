<template>
    <div class="loginForm">
        <h1>Connexion</h1>
        <!-- J'ajoute un écouteur d'événement de type submit avec preventDefault -->
        <form v-on:submit.prevent="submit()">
        <fieldset>
            <div class="field"
            v-bind:class="{ 'field--error': (errors.email.length !==0) }">
            <label for="email" class="field__label">Adresse e-mail</label>
            <!-- J'associe mon champ email à ma data grace à v-model -->
            <input
                v-model="email"
                class="field__input"
                type="text"
                placeholder="Votre e-mail"
            />
            <!-- avec v-if on verifie que s'il y a des choses dans l'imput on affiche le ul sinon on l'affiche pas -->
            <ul 
            class="field__error-list"
            v-if="errors.email.length"
            >
                <li 
                v-for="(error, index) in errors.email" 
                v-bind:key="index"
                >{{error}}
                </li>
            </ul>
            </div>
            <div 
            class="field" 
            v-bind:class="{ 'field--error': (errors.password.length !==0) }">
            <label for="password" class="field__label">Mot de passe</label>
            <input
                v-model="password"
                class="field__input"
                type="password"
                placeholder="Votre mot de passe"
            />
            <ul 
            class="field__error-list"
            v-if="errors.password.length"
            >
                <li 
                v-for="(error, index) in errors.password" 
                v-bind:key="index"
                >{{error}}
                </li>
            </ul>
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
            password: "",
            errors: {
                email: [],
                password: []
            }
        }
    },
    methods: {
        submit() {
            console.log("submit", this.email, this.password, this.validate());
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
            // J test que l'email est valide
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

<style></style>