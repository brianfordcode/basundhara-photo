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

  export default {
    components: {
      navbar, openingscreen
    }
  }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.main {
  display: flex;
}
</style>
