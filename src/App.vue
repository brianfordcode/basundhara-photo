<template>
  <div class="container">

  <openingscreen/>

  <div class="main">
    <navbar/>
    <router-view/>
  </div>
  

  </div>
  

</template>


<script>

  import navbar from './components/nav-bar'
  import openingscreen from './views/opening-screen'
  import about from './views/About'

  export default {
    components: {
      navbar, openingscreen, about
    }
  }


</script>

<style scoped>
.main {
  display: flex;
}
</style>
