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
    <div>
      <b-card-group>
        <b-card
    title="24 HORAS:"
    img-src="https://dsm01pap001files.storage.live.com/y4mxYQRAZK_Zg-iGwynGRQmeGgy-FDix4I7XiZ1u5KffxNQ78zkbZrHWsiHbVGtNND3BqtMHfMA8HtPquJ1tklbhC8SeThoEsyc8UX1Fde-__Tg4DkkmP8J_O3RQfcq093DFqYVmmb9rd7bVYqFTjWDIFg5WTvq2XNROhSAFIki4Va3rRbWZl1u91GvYnnkqV3t4T4zUAYKsxgAg_lsaKOHuA/bloque%20de%20caba%C3%B1as.jpg?psid=1&width=872&height=581"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2 "  >
    <b-card-text>
      •	Precio base $500.000 COP, máximo 8 personas.<br>
			•	Persona adicional $35.000 COP.<br>
			•	Más de 20 personas, persona adicional $25.000 COP.
    </b-card-text>

  </b-card>
      <b-card
    title="MAS DE 1 DIA:"
    img-src="https://dsm01pap001files.storage.live.com/y4m1iLUVfyDXGwT5GrYPD5taKguE5L8ZKuWoNNol2Xtxl5uH7z93xGE0j4SQ59PMJd5dqZSiVmH9LPeHGpwnGI2mbCPhMC7YQFJBllJUTIVGpg5H6mELQXT8fCdI1uOV7Wqh8s81oc1YKVfJdAhTrAC6zOmUwdU0Fw1Oheu5w6MfaUmfwFe0_Vte73thMcPgJ1G6HZ3o57j_-ADjXLVPRLZmw/piscina%20desde%20casa%20g.jpeg?psid=1&width=872&height=581"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2"
  >
    <b-card-text>
      •	Precio base $400.000 COP, máximo 8 personas.<br>
			•	Persona adicional $25.000 COP.<br>
			•	Más de 20 personas, persona adicional $18.000 COP.
    </b-card-text>

  </b-card>
      <b-card
    title="PASA DIA (DE LUNES A JUEVES)"
    img-src="https://dsm01pap001files.storage.live.com/y4mkIP7JGnnZQgkQct_TLhSinwq2B6x2zL7huMHAA1qPUKI52f7zkSTcUssBeTSL3Hq2E2zVY0SItpJE06LJJea7Av9-_Bp-9JBtVVI0A9Bw5ldvYsyRffLQVUkqkbruhf1iWIP8M0EjPp8hVDgWZiuvEjVLZIgh_vGQv_OSSSF8JdopAIjhMem7htG33C7BgWHSfLH4XcLepu7riorfJrFow/casa%20grande.jpg?psid=1&width=872&height=581"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2"
  >
    <b-card-text>
      •	Precio $500.000 COP, máximo 30 personas (solo derecho a uso de piscina, áreas verdes y casa principal).<br>
			•	Persona adicional $15.000 COP
    </b-card-text>

  </b-card>
      <b-card
    title="ESTADÍA EN SEMANA (DE LUN A JUE):"
    img-src="https://dsm01pap001files.storage.live.com/y4m8Y8MPgbPl6Ygoi1Bl-l8WodhuUAS-ydGVINY6UUfiq-1P-CPbDaA6v73AV8_Qft4WFNCMkjX-S7QvoPUv7KiKgQN7GcI3biFvO8bMZqLtWeo61IGGjXKbaRfdyC_PDw-blie702GXzLHZYwWzhWAxmXfb2Jn2MRsl94uMZvgQ9GtT0snioBrQkG3sijZObUFse1qWOML6Gz_n70JO3uuuw/atardecer%20piscina.jpeg?psid=1&width=872&height=581"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-2"
  >
    <b-card-text>
      •	Precio base $350.000 COP, máximo 8 personas<br>
			•	Persona adicional $25.000 COP<br>
			•	Más de 20 personas, persona adicional $18.000 COP
    </b-card-text>

  </b-card>      
      </b-card-group>
    </div>

    
    <b-jumbotron bg-variant="dark" text-variant="white" border-variant="white" class="cont mt-5 p-4" >
      <template #header>Que Ofrecemos</template>

        <hr class="my-3">

        <p>
        Contamos con capacidad de alojamiento para máximo 54 personas distribuidas de la siguiente manera:<br>
        1.	Casa principal, la cual cuenta con:<br>
        •	3 habitaciones, cada una con capacidad para 6 personas.<br>
        •	2 Baños.<br>
        •	Comedor interno.<br>
        •	Comedor externo.<br>
        •	Sala con tv por cable.<br>
        •	Cocina.<br>
        •	Estar con vistas a la piscina.<br>
        2.	Bloque de cabañas:<br>
        •	4 habitaciones, cada una con capacidad para 6 personas, entrada independiente y baño privado.<br>
        3.	Habitaciones auxiliares:<br>
        •	2 habitaciones, cada una con capacidad para 6 personas, entrada independiente, closet y baño compartido (al lado de las habitaciones).<br><br>
        Adicionalmente la finca cuenta con amplios espacios al aire libre rodeadas de una gran variedad de flora y fauna (en el sector hay presencia de más de 400 especies de aves y otros animales silvestres) así como animales propios de la finca tanto de exhibición (patos, bimbos, pavos reales) y para el auto sustento de la fica (gallinas ponedoras, pollos de engorde, codornices, ganado lechero) y árboles frutales.<br><br>
        Nuestros huéspedes pueden disfrutar de:<br>
        •	Piscina.<br>
        •	Wifi.<br>
        •	Duchas con agua caliente.<br>
        •	Acceso al río.<br>
        •	Cocina externa, la cual cuenta con asador, estufa y horno de leña, lava platos y excelente iluminación.<br>
        •	Amplio estacionamiento.<br>
        •	Fácil acceso para personas con discapacidad.<br>
        •	Juegos de mesa.<br>
        •	Juego de sapo.<br>
      </p>
    </b-jumbotron>
      
  <b-jumbotron bg-variant="dark" text-variant="white" border-variant="white" class="cont p-4" >
      <template #header>SERVICIOS ADICIONALES</template>

        <hr class="my-3">

        <p>
        Para el auto sustento de la finca ofrecemos venta de:<br>
        •	Leche del ordeño diario.<br>
        •	Frutas de temporada (mango, naranjas, mandarinas, bananos, plátanos).<br>
        •	Huevos criollos.<br>
        •	Pollos, gallinas y patos.<br>
        Para la celebración de sus eventos especiales, de ser necesario, contamos con nuestros aliados comerciales:<br>
      </p>
      <b-card-group class= mt-4>

        <b-card
    title="Mister Chef"
    img-src="https://drive.google.com/uc?id=1ZjrsdHbuGNqIafuZu-Sona73oOLdcjVb"
    img-alt="Log Mister Chef"
    img-top
    style="max-width: 20rem;"
    class="m-1 text-dark"
  >
    <b-card-text>
      Servicio de comidas para su estadia o eventos especiales.	
    </b-card-text>

    <b-button href="https://www.instagram.com/mchefpalmira/" target= "blank" variant="primary">Instagram</b-button>
  </b-card>

  <b-card
    title="CANDY LOVERS:"
    img-src="https://drive.google.com/uc?id=1rLV0cyxLjsEEUCk7fJOgwBepMhq8nei0"
    img-alt="Log CANDY LOVERS:"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-1 text-dark"
  >
    <b-card-text>
      Desayunos sorpresas y decoracion de eventos.
    </b-card-text>

    <b-button href="https://www.instagram.com/candyloverscol/" target= "blank" variant="primary">Instagram</b-button>
  </b-card>

  <b-card
    title="JF DECORACIONES"
    img-src="https://drive.google.com/uc?id=1tj_ZqRtv2BFO0diRwX1o5yVtXQyc9EQb"
    img-alt="Log JF DECORACIONES"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-1 text-dark"
  >
    <b-card-text>
      Decoracion de eventos y arreglos con globos.
    </b-card-text>

    <b-button href="https://www.instagram.com/jf.decoraciones/" target= "blank" variant="primary">Instagram</b-button>
  </b-card>

  <b-card
    title="KIMBARA LATIN SHOW"
    img-src="https://drive.google.com/uc?id=1bIIM0j7Qm_CEDbf2AuAqvY48ntPVH_Ta"
    img-alt="Log KIMBARA LATIN SHOW"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="m-1 text-dark"
  >
    <b-card-text>
      Animacion de eventos, shows de baile y montaje de coreografias.
    </b-card-text>

    <b-button href="https://www.instagram.com/kimbaralatin/" target= "blank" variant="primary">Instagram</b-button>
  </b-card>

  </b-card-group>
    </b-jumbotron>

  </b-row>
  </b-container>
    
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
</script>