<template>
  <div class="nav">
        <div class="content">
            <img src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">

            <div @click="menuIsOpen = !menuIsOpen" class="hamb-menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div v-if="menuIsOpen" class="links">
            <router-link to="./MyWork">My Work</router-link> 
            <router-link to="./About">About Me</router-link> 
            <router-link to="./Contact">Contact Me</router-link> 
            <router-link to="./HeadshotTips">Headshot Tips</router-link>

            <div class="social-links">
                <social class="social" social="facebook"></social>
                <social class="social" social="linkedin"></social>
                <social class="social" social="instagram"></social>
            </div>
        </div>


  </div>
</template>

<script>
import social from "../components/social-links.vue"

export default {
    components: { social },

    data() {
        return {
            menuIsOpen: false
        }
    }



}
</script>

<style scoped>

@media screen and (min-width: 700px) {
    .nav {
        display: none;
    }
}

.nav {
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
    /* position: fixed; */
    z-index: 1000;
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.basu-logo {
    height: 35px;
    margin: 5px 0;
}

.hamb-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}
.hamb-menu div:nth-child(2) {
    margin: 5px 0;
}

.hamb-menu div {
    height: 2px;
    width: 20px;
    background-color: black;
}

.social-links {
    display: flex;
}

.links {
    width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
}

.links > *:hover {
  color:rgb(30, 30, 114);
}

.links > * {
  text-decoration: none;
  color: black;
  margin: 20px 0;
  font-size: 20px;
  transition: .2s, fade-in-out;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


.social {
  cursor: pointer;
  height: 25px;
  transition: .2s, fade-in-out;
}

.social:nth-child(2) {
    margin: 0 20px;
}

.social:hover {
  transform: scale(1.2);
}




</style>