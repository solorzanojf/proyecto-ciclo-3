<template>
  <div class="d-flex justify-content-center">
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show" class="bg-dark p-4 formulario mt-5">
      <b-form-group
        id="input-group-1"
        label="Nombres y apellidos"
        label-for="input-1"
        description="Ingrese su nombre y appelido"
        class="mb-3"
      >
        <b-form-input
          id="input-1"
          v-model="form.nombres"
          placeholder="Nombres"
          required
          class="mt-2"
        ></b-form-input>

        <b-form-input
          id="input-1"
          v-model="form.apellidos"
          placeholder="Apellidos"
          required
          class="mt-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
      id="input-group-2" 
      class="">
        <label for="b-form-select ">Tipo de documento</label>
        <b-form-select 
        v-model="form.tipodocumento" 
        :options="identidad"
        class="mb-3 input-identidad"></b-form-select>
        <label for="b-form-input ">Numero de documento</label>
        <b-form-input
          v-model="form.numero_documento"
          type="number"
          placeholder="1000785740"
          required
          class="mb-3"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
      id="input-group-2" 
      label="Correo electronico" 
      class="mt-2">
        <b-form-input
          v-model="form.correo"
          type="email"
          placeholder="juan@mintic.com"
          required
          class="mb-3"
        ></b-form-input>
        <label for="b-form-imput">Numero telefonico</label>
        <b-form-input
          v-model="form.numero_telefonico"
          type="number"
          placeholder="3112234465"
          required
          class="mt-2"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-pass" label="Elija una contraseña:" label-for="input-2" class="mt-3">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Contraseña"
          required
          class="mt-2"
        ></b-form-input>
      </b-form-group>


      <div class="mt-5 d-flex justify-content-between container-fluid">
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
        forms:[],
        form: {
          roll: "usuario",
          nombres: '',
          apellidos: '',
          tipodocumento: 'a',
          numero_documento: '',
          correo: '',
          numero_telefonico: '',
          password: '',
        },
        identidad:[
          { value: 'a', text: 'Tarjeta de identidad' },
          { value: 'b', text: 'Cedula ciudadana' },
          { value: 'c', text: 'Pasaporte' },
        ],
        show: true
      }
    },
    methods: {
      resetData(){
        this.form.nombres = '',
        this.form.apellidos = '',
        this.form.tipodocumento = '',
        this.form.numero_documento = '',
        this.form.correo = '',
        this.form.numero_telefonico = '',
        this.form.password = ''
      },

      onSubmit() {
        //añadimos el nuevo usuario
        this.axios.post('/nuevo-usuario',this.form)
        .then(res=>{
            this.forms.push(res.data)
            this.resetData();
            this.showAlert();
        })
        .catch(e=>{

            console.log(e.response);

        })
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
    .input-identidad{
      width: 100%;
      height: 35px;
      border-radius: 7px;
    }
</style>