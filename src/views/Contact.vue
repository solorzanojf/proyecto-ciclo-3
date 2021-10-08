<template>
  <div class="m-5">
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="white" class="cont p-4" >
      <template #header>REDES SOCIALES</template>

    <hr class="my-3">
      <p>  
        Para más información puede contactarnos a través de nuestras redes sociales o escribirnos a nuestro correo electrónico.<br>
      </p>
    <b-card-group class= mt-4>

    <b-card
    title="FaceBook"
    img-src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
    img-alt="FaceBook"
    img-top
    style="max-width: 20rem;"
    class="m-1 text-dark">

    <b-card-text>
      Encuentranos en FaceBook como @Jordan Buitrera.
    </b-card-text>

    <b-button href="https://www.facebook.com/jordan.buitrera.3" target= "blank" variant="primary">FaceBook 🔗</b-button>
    </b-card>

    <b-card
    title="whatsapp:"
    img-src="https://cdn.pixabay.com/photo/2021/10/05/17/23/17-23-43-560_960_720.jpg"
    img-alt="whatsapp"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-1 text-dark">
    <b-card-text>
      Escanea el código QR para hablar con nosotros.
    </b-card-text>
    <b-card-text id="número">
      +57 3142647914
    </b-card-text>
  
     <b-button href="https://wa.me/qr/CVP3CNZORFPWD1" target= "blank" variant="primary">Ir a whatsapp 🔗</b-button>
    <hr class="">
     <b-button v-on:click="copiar2" target= "blank" variant="primary">Copiar número 📄</b-button>
     </b-card>

    <b-card
    title="Correo electronico"
    img-src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_960_720.png"
    img-alt="v1"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-1 text-dark">
    <b-card-text>
      Escrivenos al correo  
    </b-card-text>
    <b-card-text id="correo">
      eljordanlabuitrera@gmail.com
    </b-card-text>
    
     <b-button href="mailto:eljordanlabuitrera@gmail.com" target= "blank" variant="primary">Clicka para enviar email 🔗</b-button>
     <hr class="">
     <b-button v-on:click="copiar" target= "blank" variant="primary">Copiar correo 📄</b-button>
    </b-card>

    </b-card-group>
    </b-jumbotron>

    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="white" class="cont mt-5 p-4" >
      <template #header>NUESTRA UBICAION </template>

        <hr class="my-3">
        <p>  
          DIRECCIÓN: RURAL # 1-637, AYACUCHO BARRIO EL CARMELO, CORREGIMIENTO LA BUITRERA, MUNICIPIO DE PALMIRA, DEPARTAMENTO DEL VALLE DEL CAUCA, COLOMBIA.<br>
       </p>
        <b-row>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.9032943738896!2d-76.20744710697525!3d3.4820281352117446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjgnNTUuNCJOIDc2wrAxMicyNi41Ilc!5e0!3m2!1ses!2sco!4v1633402605929!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </b-row>
      </b-jumbotron>
      </div>
   </template>

<style>
  body{
    background-image: url("https://fondosmil.com/fondo/14279.jpg"); 
  }
  .cont{
    border-radius: 5px;
    margin-bottom: 10vh;
  }
  .carrousel{
    overflow:hidden;
  }
</style>

<script>
export default ({
  methods:{
    copiar(){
       let codigoACopiar=document.getElementById("correo").innerHTML;
       navigator.clipboard.writeText(codigoACopiar).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
 },
  copiar2(){
       let codigoACopiar=document.getElementById("número").innerHTML;
       navigator.clipboard.writeText(codigoACopiar).then(function() {
  console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  console.error('Async: Could not copy text: ', err);
});
    }   
  }
})
</script>
