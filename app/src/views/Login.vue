<template>
  <div>
    <h2>Connexion</h2>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss">
 @import "@/scss/form.scss";
 @import "@/scss/colors.scss";
</style>