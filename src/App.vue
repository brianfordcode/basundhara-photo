<template>

  <div class="main">
    <navbarmobile v-if="currentRouteName !== 'openingScreen'" />
    <navbar v-if="currentRouteName !== 'openingScreen'"/>
    <router-view/>
  </div>

</template>


<script>

  import navbar from './components/nav-bar'
  import openingscreen from './views/opening-screen'
  import navbarmobile from './components/nav-bar-mobile'

  export default {
    components: {
      navbar, navbarmobile, openingscreen
    },
    computed: {
      currentRouteName() {
        return this.$route.name;
      }
    }
  }
  


</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

  .main {
    display: flex;
  }

  @media screen and (max-width: 700px) {
    .main {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<!--
  
  --------- put this in package.json----------

  ---- I don't know how to do npm run serve to get localhost: -----
"scripts": {
  "serve": "vue-cli-service --openssl-legacy-provider serve",
  "build": "vue-cli-service --openssl-legacy-provider build",
  "lint": "vue-cli-service --openssl-legacy-provider lint"
},

---- This works on netlify but not for localhost viewing: ------
"scripts": {
  "serve": "vue-cli-service",
  "build": "vue-cli-service",
  "lint": "vue-cli-service"
},

----- this works for localhost but not for netlify build: -----
"scripts": {
  "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
  "build": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
  "lint": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service lint"
},

-->
