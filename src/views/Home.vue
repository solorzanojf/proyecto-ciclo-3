<template>
  <div>
    <b-container class="mt-5">
      <b-row>
        <b-col>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 10px #000;"
          fade
          controls
          img-width="1024"
          img-height="480"
          class="mb-5 carrousel"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="https://dsm01pap001files.storage.live.com/y4mAJXM8CLf8nM7Vq8slhgNWvhYEmXc_VeL4pEVmuEsHbd5gIG0Vdl6SvWZFIewSWWkym7_YDIdYFEQAPGdN-UbIma2RZYae3YWDchJEWRzJTDZUSFmMBmSgBBmnyyNpsIH2xyZNWe9nPgQdep44hinBsGaneqTmwCjimEtz01nWacXFtyGeOhYxdPIilgMFV0e94z0OKEUBACHSUbrqoS7Ng/20190429_162515-01.jpg?psid=1&width=1080&height=720"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://dsm01pap001files.storage.live.com/y4mh1LT3Bev2rqSMLKYzigfezEgsQyajgUPTtNg0e2XRbDU55yftcbOUDHVzbGkMpPxmaljM6SEhnwxXhp9nhkqQkT_kDAAXQIpKJqDmz_6j9aJtncntcIzSBwIi1Ary_yJOiRxwBIl6eBsgAOpFh6A11Zl22epTzLq3RuZgtkktJwsUQzPMyenDLEmLDEZyAy2H6VJZVAPG_lcy7mNzdAiJg/20190429_162539-01.jpg?psid=1&width=1080&height=720"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://dsm01pap001files.storage.live.com/y4m_cFRz-0nKn2wym3thl8Im1c6BA-E4YYkHpFeH5bV8nMQXPRn3dGGAK0PWwRxdH7O81MUnr7SHewYoE6riZwsblBIjEaaiEKe018ZWHXW5UrIKnMtFJCUhuNhzkIOFB0Dsjomg8O7Srr-1SQ60Wje4ZrdmuTumNqrPtQLTGXj1nzwtN4G_YPxr_omeG3RbPLMBCm4m4YOge-M0U_NhxZAWg/20190429_162624-01.jpg?psid=1&width=1080&height=720"
          ></b-carousel-slide>
        </b-carousel>
        </b-col>
      </b-row>

      <!-- Contenido -->
      <b-row>
        <b-jumbotron bg-variant="dark" text-variant="white" border-variant="white" class="cont p-4">
        <template #header>Quienes somos</template>

        <hr class="my-3">

        <p>
          El corregimiento de la Buitrera es un sendero de ida y vuelta de 23.3 kilómetros con tráfico moderado del municipio de Palmira Valle del Cauca, en el barrio el Carmelo está ubicada la Finca El Jordán, su agradable clima (1.289 m.s.n.m.) hace de este el lugar el sitio ideal para celebrar sus eventos especiales, hospedarse o ir de vacaciones. <br> La Finca El Jordán es un lugar generoso en armonía con la naturaleza que cuenta con un estanque con peces, y el murmullo del río en la ladera que limita la finca, desarrolla la cría de animales para el turismo sostenible, y respetuoso con la fauna. En sus instalaciones cuenta con baños con agua caliente, amplias habitaciones y wifi.  Todo esto lo puedes disfrutar con tu mejor compañía, la puesta de sol, o simplemente sentarte y contemplar el paisaje hasta el horizonte sintiéndote libre. Este hermoso lugar donde la madre naturaleza nos evoca a vivir una experiencia turística de bienestar con respeto por el medio ambiente. <br> En la Finca El Jordán contamos con capacidad de hospedar cómodamente 54 personas, siendo este el sitio perfecto para aprovechar y caminar con tranquilidad y paz, encontrando en sus alrededores tiendas de mercado, la estación de policía, restaurantes, el parque del pueblo, las iglesias, todo muy cercano, dándonos la oportunidad de conocer, permitiéndonos tener unos días más saludables y vivir con menos prisas y sin el estrés diario de la ciudad. <br> Para quienes les gusta bajar volando lo pueden hacer desde las cimas de las montañas, en un sitio especial para practicar parapente, este deporte lo puedes encontrar a pocos minutos de nuestras instalaciones, al igual que la Reserva Natural Nirvana, toda una experiencia para los visitantes. <br> Se puede llegar a La Finca El Jordán en transporte público o privado, contamos con una amplia zona de parqueadero para sus vehículos.
        </p>
        <b-button variant="primary" :to="{name: 'About'}"><b-icon class="m-" icon="exclamation-circle-fill" variant="danger"></b-icon> Mas informacion</b-button>
      </b-jumbotron>
      </b-row>
    </b-container>
  </div>
</template>

<style>
  body{
    background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-dark.png"); 
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
</script>