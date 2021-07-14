<template>
  <div class="nav">
        <div class="content">
            <img @click="goHome" src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">
            <hamb-menu @click="isOpen = !isOpen" :active="isOpen" />
        </div>

        <div v-if="isOpen" @click="closeMenu" class="links-container">
            <router-link class="router-link" to="./Portfolio">Portfolio</router-link> 
            <router-link class="router-link" to="./About">About Me</router-link>
            <router-link class="router-link" to="./HeadshotTips">Photoshoot Tips</router-link>
            <router-link class="router-link" to="./Testimonials">Testimonials</router-link>
            <router-link class="router-link" to="./Contact">Contact</router-link> 
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
import hambMenu from "../components/hamb-menu.vue"

export default {
    components: { social, hambMenu },
    data() { return {
        isOpen: false
    }},
    methods: {
        closeMenu(e) {
            console.log(e.target);
            this.isOpen = false
        },
        
        goHome() {
            return this.$router.push('./');
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
    z-index: 1000;
    position: fixed;
    background-color: white;
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 1000;
}

.basu-logo {
    height: 35px;
    margin: 5px 0;
    cursor: pointer;
    user-select: none;
}

.social-links {
    display: flex;
}

.router-link {
    width: 100%;
    text-align: center;
}

.links-container {
    z-index: 999;
    position: absolute;
    right: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    user-select: none;
    box-shadow: 0px 16px 16px 0px rgba(0,0,0,0.15);
}

.links-container > *:hover {
  color:rgb(30, 30, 114);
}

.links-container > * {
  text-decoration: none;
  color: black;
  padding: 20px 0;
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