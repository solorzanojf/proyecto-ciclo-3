<template>
    <div>
        <div class="container ml-5 mr-5 bg-light text-dark p-3 mt-5">
        <b-alert 
        :show="dismissCountDown" 
        dismissible 
        :variant="mensaje.color" 
        @dismissed="dismissCountDown=0" 
        @dismiss-count-down="countDownChanged" > 
        {{mensaje.texto}} 
        </b-alert>


        <form @submit.prevent="editarUsuario(Useredit)" v-if="editar">
            <h3>Editar usuario</h3>

            <b-form-group
                id="input-group-1"
                label="Nombres y apellidos"
                label-for="input-1"
                description="Ingrese su nombre y appelido"
                class="mb-3">
                <b-form-input
                    id="input-1"
                    v-model="Useredit.nombres"
                    placeholder="Nombres"
                    required
                    class="mt-2"
                ></b-form-input>

                <b-form-input
                    id="input-1"
                    v-model="Useredit.apellidos"
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
                v-model="Useredit.tipodocumento" 
                :options="identidad"
                class="mb-3 input-identidad"></b-form-select>
                <label for="b-form-input ">Numero de documento</label>
                <b-form-input
                v-model="Useredit.numero_documento"
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
                v-model="Useredit.correo"
                type="email"
                placeholder="juan@mintic.com"
                required
                class="mb-3"
                ></b-form-input>
                <label for="b-form-imput">Numero telefonico</label>
                <b-form-input
                v-model="Useredit.numero_telefonico"
                type="number"
                placeholder="3112234465"
                required
                class="mt-2"
                ></b-form-input>
            </b-form-group>

            <!-- <b-form-group id="input-group-pass" label="Elija una contraseña:" label-for="input-2" class="mt-3">
                <b-form-input
                id="input-2"
                v-model="Useredit.password"
                type="password"
                placeholder="Contraseña"
                required
                class="mt-2"
                ></b-form-input>
            </b-form-group> -->


            <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
            <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>

        </form>
        <form @submit.prevent="agregarUsuario()" v-if="!editar">
            <h3>Agregar usuario</h3>

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

            <!-- <b-form-group id="input-group-pass" label="Elija una contraseña:" label-for="input-2" class="mt-3">
                <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Contraseña"
                required
                class="mt-2"
                ></b-form-input>
            </b-form-group> -->
            
            <b-button class="btn-success my-2" type="submit">Agregar</b-button>

        </form>
    </div>
    <div class="container-fluid bg-light mt-5 mb-5">
        <div class="table-responsive table-bordered table-striped">
            <table class="table">
                <thead class="text-center"> 
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombres</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Tipo_documento</th>
                        <th scope="col">Numero_documento</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Numero telefonico</th>
                        <!-- <th scope="col">Contraseña</th> -->
                        <th scope="col">Opciones</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-center text-truncate" v-for="(item, index) in Usuarios" :key="index">
                        <th scope="row">{{item._id}}</th>
                        <td class="text-truncate" style="max-width: 150px;">{{item.nombres}}</td>
                        <td class="text-truncate" style="max-width: 150px;">{{item.apellidos}}</td>
                        <td class="text-truncate" style="max-width: 150px;">{{item.tipodocumento}}</td>
                        <td class="text-truncate" style="max-width: 150px;">{{item.numero_documento}}</td>
                        <td class="text-truncate" style="max-width: 150px;">{{item.correo}}</td>
                        <td class="text-truncate" style="max-width: 150px;">{{item.numero_telefonico}}</td>
                        <!-- <td class="text-truncate" style="max-width: 150px;">{{item.password}}</td> -->
                        <td>
                            <b-button class="btn-danger mx-2" @click="eliminarUsuario(item._id)">Eliminar</b-button>
                        </td>
                        <td>
                            <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div> 
    </div>
</template>

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

<script>
export default {

    data() {
        return {

            Usuarios: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            //form:{} password: '',


            form: {
                nombres: '',
                apellidos: '',
                tipodocumento: 'a',
                numero_documento: '',
                correo: '',
                numero_telefonico: ''
            },
            identidad:[
                { value: 'a', text: 'Tarjeta de identidad' },
                { value: 'b', text: 'Cedula ciudadana' },
                { value: 'c', text: 'Pasaporte' },
            ],
            editar:false,
            Useredit:{}

        }

    },

    created() {

        this.listarUsuarios();

    },

    methods: {

        listarUsuarios() {

            this.axios.get('/Usuarios')
                .then(res => {
                    console.log(res.data);
                    this.Usuarios = res.data;

                })
                .catch(e => {

                    console.log(e.response);

                })

        },


        resetData(){
            this.form.nombres = '',
            this.form.apellidos = '',
            this.form.tipodocumento = '',
            this.form.numero_documento = '',
            this.form.correo = '',
            this.form.numero_telefonico = ''
        },

        agregarUsuario() {
            //añadimos el nuevo usuario
            this.axios.post('/nuevo-usuario',this.form)
            .then(res=>{
                this.Usuarios.push(res.data)
                this.resetData();
                this.showAlert();
                this.listarUsuarios();
                this.mensaje.color="success";
                this.mensaje.texto="Usuario Agregada";
                this.showAlert();
            })
            .catch(e=>{

                console.log(e.response);

            })
        },

        eliminarUsuario(id){

            this.axios.delete(`/Usuarios/${id}`)
            .then(res=>{

                const index = this.Usuarios.findIndex(item=> item._id===res.data._id);
                this.Usuarios.splice(index, 1);
                this.mensaje.color="danger";
                this.mensaje.texto="Usuario Eliminada";
                this.showAlert();


            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/Usuarios/${id}`)
            .then(res=>{

                this.Useredit=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })

            // this.mensaje.color="info";
            // this.mensaje.texto="Usuario modificado con exito";
            // this.showAlert();

        },

        editarUsuario(item){
            
            this.axios.put(`/Usuarios/${item._id}`, item)
            .then(res=>{
                const index= this.Usuarios.findIndex(n=> n._id===res.data._id);
                
                this.Usuarios[index].nombres=res.data.nombres;
                this.Usuarios[index].apellidos=res.data.apellidos;
                this.Usuarios[index].tipodocumento=res.data.tipodocumento;
                this.Usuarios[index].numero_documento=res.data.numero_documento;
                this.Usuarios[index].correo=res.data.correo;
                this.Usuarios[index].numero_telefonico=res.data.numero_telefonico;
                // this.Usuarios[index].password=res.data.password;

                this.mensaje.color="success";
                this.mensaje.texto="Nota Editada";
                this.showAlert();
                this.editar=false;


            })
            .catch(e=>{

                console.log(e.response);

            })



        },
        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }

    }

}
</script>
