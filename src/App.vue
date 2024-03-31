<template>

  <div class="main">
    <navbarmobile v-if="currentRouteName !== 'openingScreen'" />
    <navbar v-if="currentRouteName !== 'openingScreen'"/>
    <router-view/>
  </div>

</template>


<script>

  import navbar from './components/nav-bar.vue'
  import openingscreen from './views/opening-screen.vue'
  import navbarmobile from './components/nav-bar-mobile.vue'

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
