<template>

  <div id="container">

    <div class="banner">
      <div class="banner-content">

        <div class="title">
          <img src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">
          <h3>Professional Headshots | Corporate Photography | Branding and Commercial Photoshoots</h3>
          <button class="button" @click="onClick">Enter</button>
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
//   name: 'Home',
  components: { social
  },
    methods: {
        onClick() {
            // document.getElementById("container").style.display="none"
        }
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
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');


#container {
  background-image: url('../assets/background.jpg');
  background-repeat: repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: .5s, fade-in-out;
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
}

.basu-logo {
  height: auto;
  width: 300px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* border: 1px solid blue; */
  height: 300px;
}

.button {
  display: inline-block;
  background-color: white;
  padding: 20px 40px;
  width: 150px;
  /* margin-top: 40px; */
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
  transition: .2s, fade-in-out;
}

.social:nth-child(2) {
  margin: 0 20px;
}

.social:hover {
  transform: scale(1.2);
}
</style>

