<template>
  <div class="container">

    <openingscreen/>

    

  </div>
  <div class="main">
      <navbar/>
      <router-view/>
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

.container {
  position: absolute;
  width: 100%;
  z-index: 2;
}

.main {
  display: flex;
}
</style>
