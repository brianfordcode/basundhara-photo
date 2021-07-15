<template>

    <div class="nav">
      <div class="content">
        
          <img @click="goHome" src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">
    
        <div class="links">
            <router-link to="./portfolio">Portfolio</router-link> 
            <router-link to="./about">About Me</router-link> 
            <router-link to="./photoshoottips">Photoshoot Tips</router-link>
            <router-link to="./testimonials">Testimonials</router-link>
            <router-link to="./contact">Contact</router-link> 
        </div>

        <div class="social-links">
          <social class="social" social="facebook"></social>
          <social class="social" social="linkedin"></social>
          <social class="social" social="instagram"></social>
        </div>
      </div>
        
        
    </div>

</template>


<style scoped>

  .nav {
    width: 210px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-shrink: 0;
    flex-grow: 0;
    user-select: none;
    z-index: 50000;
  }

  @media screen and (max-width: 700px) {
    .nav {
      display: none;
    }
  }

  .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
    top: 0;
  height: 100vh;
  }

  /* LOGO */
  .basu-logo {
    width: 80%;
    cursor: pointer;
    margin: 30px 0;
  }

  /* PAGE LINKS */
  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-grow: 1;
  }

  .links > * {
    text-decoration: none;
    color: black;
    margin: 20px 0;
    font-size: 20px;
    transition: .2s, fade-in-out;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .router-link-active {
    text-decoration: underline;
  }

  /* SOCIAL LINKS */


  .social {
    cursor: pointer;
    height: 40px;
    transition: .2s, fade-in-out;
    margin: 30px 10px;
  }

  .social:hover {
    transform: scale(1.2);
  }

</style>


<script>
import social from "../components/social-links.vue"
import openingScreen from "../views/opening-screen.vue"

export default {
    components: { social, openingScreen },

    methods: {
      goHome() {
        return this.$router.push('./');
      }
    }
}

</script>
