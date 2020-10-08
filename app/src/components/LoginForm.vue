<template>
    <div class="loginForm">
        <h1>Connexion</h1>
        <form>
        <fieldset>
            <div class="field">
            <label class="field__label">Adresse e-mail</label>
            <input
                class="field__input"
                type="text"
                placeholder="Votre e-mail"
            />
            </div>
            <div class="field field--error">
            <label class="field__label">Mot de passe</label>
            <input
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

}
</script>

<style>

</style>