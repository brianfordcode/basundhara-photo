<template>
  <div class="opening-screen">
    <openingscreen/>
  </div>

  <div class="main">
      <navbarmobile />
      <navbar/>
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
    }
  }


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.opening-screen {
  position: absolute;
  width: 100%;
  z-index: 20;
}

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
