<template>

  <div class="container">

    <div class="banner">
      <div class="banner-content">

        <div class="title">
          <h1>Basundhara</h1>
          <h3>Professional Headshots | Corporate Photography |</h3>
          <h3>Branding and Commercial Photoshoots</h3>
        <router-link class="button" to="/App.vue"><p>Enter</p></router-link>
        </div>

        <div class="links">
          <social class="social" social="facebook"></social>
          <social class="social" social="linkedin"></social>
          <social class="social" social="instagram"></social>
        </div>
         
      </div>
      
    </div>

  </div>

</template>

<!-- JAVASCRIPT -->
<script>

import social from "../components/social-links.vue"


export default {
  name: 'Home',
  components: { social
  }
}
</script>

<!-- STYLING -->
<style>

* {
  margin: 0;
  padding: 0;
}

</style>

<style scoped>

.container {
  background-image: url('../assets/background.jpg');
  background-repeat: repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.banner {
  background-color: rgba(255,255,255,0.9);
  width: 100%;
  height: 300px;
}

.banner-content {
  margin-top: 40px;
  font-family: cursive;
  display: flex;
  justify-content: space-around;
  align-items: center;
}


.button {
  display: inline-block;
  background-color: white;
  padding: 20px 40px;
  margin-top: 40px;
  border: none;
  border: 2px solid black;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: black;
  transition: .2s, fade-in-out;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.button:hover {
  background-color: black;
  color: white;
}

.social {
  cursor: pointer;
  height: 30px;
  margin: 10px;
  transition: .2s, fade-in-out;
}

.social:hover {
  transform: scale(1.2);
}
</style>

