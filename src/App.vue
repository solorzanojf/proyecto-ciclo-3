<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark" sticky>
      <b-container class="justify-content-rigth">
        <b-navbar-brand :to="{name: 'Home'}">
          <img v-bind:src="require('./assets/logo.svg')" class="d-inline-block align-top logo-navbar" alt="Kitten">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" >Inicio</b-nav-item>
            <b-nav-item :to="{name: 'About'}">Acerca de</b-nav-item>
            <b-nav-item :to="{name: 'Contact'}">Contactenos</b-nav-item>
            <b-nav-item :to="{name: 'Admin'}">CRUD</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
  .logo-navbar{
    height: 50px;
  }
  .navtext{
    margin: 10px;
  }
</style>