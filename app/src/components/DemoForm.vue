<template>
  <section class="demo-form">
    <!-- Création du formulaire de demande de démo grâce à bootstrap cf site web https://www.w3schools.com/bootstrap4/bootstrap_forms.asp-->
    <!-- TODO personnaliser formulaire + voir interaction js -->
    <form>
      <h2>Prêt à découvrir Beauté Recrutement ?</h2>
      <div class="form-group">
        <label for="InputNameDemoForm">Nom</label>
        <input type="name" class="form-control" id="InputNameDemoForm" />
      </div>
      <div class="form-group">
        <label for="InputFirstNameDemoForm">Prénom</label>
        <input
          type="firtsname"
          class="form-control"
          id="InputFirstNameDemoForm"
        />
      </div>
      <div class="form-group">
        <label for="InputEmailDemoForm">Email</label>
        <input type="email" class="form-control" id="InputEmailDemoForm" />
      </div>
      <div class="form-group">
        <label for="InputPhoneDemoForm">Téléphone</label>
        <input type="password" class="form-control" id="InputPhoneDemoForm" />
      </div>
      <button type="submit" class="btn btn-info">DEMANDER UNE DEMO</button>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
// Formulaire

.btn-info,
.form-group {
  margin: 1rem;
}

.form-group label {
  margin: 1rem;
}
</style>
