<template>
  <div class="d-flex justify-content-center">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="bg-dark p-4 formulario mt-5">
      <b-form-group
        id="input-group-1"
        label="Email:"
        label-for="input-1"
        description="Ingrese su correo electronico aqui"
        class="mb-3"
      >
        <b-form-input
          id="input-1"
          v-model="form.correo"
          placeholder="juan@mintic.com"
          type="email"          
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Contraseña:" label-for="input-2" class="mb-5">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Contraseña"
          required
        ></b-form-input>
      </b-form-group>


      <div class="d-flex justify-content-between container-fluid">
            <b-button type="submit" class="btn btn-primary pt-1 pb-1 p-5">Submit</b-button>
            <b-button type="reset" class="btn btn-danger pt-1 pb-1 p-5">Reset</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          correo: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        //redirigir al usuario al admin
        this.$router.push('/admin');
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.password = ''
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style>
    .formulario{
        color:white;
        width: 50vh;
    }

    .title-login{
        color:white;
        font-size: 5vh;
    }
</style>