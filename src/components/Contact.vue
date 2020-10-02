<template>
  <section class="container">
    <h2 class="primary-font-accent title">Contactenos</h2>
    <form @submit.prevent="submit">
      <label for="firstname">Nombre</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Escriba su nombre"
      />
      <label for="lastname">Apellido</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Escriba su apellido"
      />
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Escriba su email"
      />
      <label for="phone">Telefono</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Escriba su número de móvil"
      />
      <button type="submit">Enviar</button>

      <div v-if="submitStatus">
        {{ submitStatus }}
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
      email
    },
    phone: {
      numeric
    }
  },
  methods: {
    submit() {
      console.log("submit!");
      console.log(this.$v);
      /*
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
      */
    }
  }
};
</script>

<style scoped lang="sass">
section
  margin-top: 150px
</style>
