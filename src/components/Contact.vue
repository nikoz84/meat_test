<template>
  <section class="container">
    <h2 class="primary-font-accent title">Contactenos</h2>
    <form @submit.prevent="submit" class="form-layout">
      <div class="control">
        <label for="firstname">Nombre</label>
        <input
          type="text"
          class="input"
          name="firstname"
          v-model.trim="firstname"
          id="firstname"
          placeholder="Escriba su nombre"
        />
      </div>
      <div class="control">
        <label for="lastname">Apellido</label>
        <input
          type="text"
          class="input"
          name="lastname"
          v-model.trim="lastname"
          id="lastname"
          placeholder="Escriba su apellido"
        />
      </div>
      <div class="control">
        <label for="email">Email</label>
        <input
          type="email"
          class="input"
          v-model.trim="email"
          name="email"
          id="email"
          placeholder="Escriba su email"
        />
      </div>
      <div class="control">
        <label for="phone">Telefono</label>
        <input
          type="text"
          class="input"
          v-model.trim="phone"
          name="phone"
          id="phone"
          placeholder="Escriba su número de móvil"
        />
      </div>
      <div class="control">
        <strong>{{ submitStatus }}</strong>
      </div>
      <div class="control">
        <button class="button btn-yellow" type="submit">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script>
import { required, minLength, email, numeric } from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      submitStatus: null
    };
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(4)
    },
    lastname: {
      required,
      minLength: minLength(3)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      numeric
    }
  },
  methods: {
    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "Verifique sus datos enviados";
      } else {
        this.submitStatus = "Enviando...";
        const response = await this.$axios.post(
          "https://5eed24da4cbc340016330f0d.mockapi.io/api/subscribe",
          {
            firstname: this.$v.firstname.$model,
            lastname: this.$v.lastname.$model,
            email: this.$v.email.$model,
            phone: this.$v.phone.$model
          }
        );
        if (response.statusCode == 200) {
          console.log(response);
          this.submitStatus = "Gracias... formulário enviado con suceso!";
        }
        this.$v.$reset();
      }
    }
  }
};
</script>

<style scoped lang="sass">
section
  margin-top: 150px

label
  font-weight: bold

.form-layout
  display: flex
  flex-wrap: wrap
  justify-content: center
  margin-bottom: 150px
.control
  margin-right: 45px
  margin-bottom: 30px
  width: 40%


.btn-yellow
  background-color: #D8AD3D
  color: #ffffff
  font-weight: bold

.btn-yellow:hover
  background: #009CD9
  color: #ffffff
</style>
