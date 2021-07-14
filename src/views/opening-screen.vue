<template>

  <div id="container">

    <div class="banner">
      <div class="banner-content">

        <div class="title">
          <img src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">
          <h3>LinkedIn and Corporate Headshots | Branding and Editorial Portraits</h3>
          <button class="button" @click="$router.push({ name: 'Portfolio' })">View Portfolio</button>
        <!-- <router-link class="button" to="/App.vue"><p>Enter</p></router-link> -->
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

  components: { social },

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
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');


#container {
  background-image: url('../assets/background.jpg');
  background-repeat: repeat;
  background-size: 1500px auto;
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
  font-family: 'Dancing Script';
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.basu-logo {
  width: 300px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.button {
  display: inline-block;
  background-color: white;
  padding: 15px 20px;
  width: 210px;
  border: 1px solid rgb(124, 124, 124);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: black;
  transition: .2s, fade-in-out;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.button:hover {
  background-color: rgb(124, 124, 124);
  color: white;
}

.social {
  cursor: pointer;
  height: 30px;
  transition: .2s, fade-in-out;
}



.social:nth-child(2) {
  margin: 0 20px;
}

.social:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 800px) {

  .basu-logo {
    width: 200px;
  }

  h3 {
    font-size: 15px;
  }

  .links {
    display: flex;
    flex-direction: column;
    padding-left: 10px;

  }

  .social:nth-child(2) {
    margin: 20px 0;
  }
  
  .banner-content {
    padding: 0 5%;
  }
  
}
</style>

