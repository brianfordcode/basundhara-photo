<template>
  <div class="nav">
        <div class="content">
            <img src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">
            <hamb-menu @click="isOpen = !isOpen" :active="isOpen" />
        </div>

        <div v-if="isOpen" @click="closeMenu" class="links-container">
            <router-link class="router-link" to="./MyWork">My Work</router-link> 
            <router-link class="router-link" to="./About">About Me</router-link> 
            <router-link class="router-link" to="./Contact">Contact Me</router-link> 
            <router-link class="router-link" to="./HeadshotTips">Headshot Tips</router-link>

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

.social-links {
    display: flex;
}

.router-link {
    width: 100%;
    text-align: center;
}

.links-container {
    position: absolute;
    right: 0;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    user-select: none;
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