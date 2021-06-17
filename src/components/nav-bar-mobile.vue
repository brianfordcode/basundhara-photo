<template>
  <div class="nav">
        <div class="content">
            <img src="../assets/basu-logo.png" class="basu-logo" alt="basu-logo">

            <div @click="menuIsOpen = !menuIsOpen;"
                 id= "hamb-menu"
                 :class="{ 'open': menuIsOpen }">
                <span class="burger-bar-1"></span>
                <span class="burger-bar-2"></span>
                <span class="burger-bar-3"></span>
            </div>
        </div>

        <div v-if="menuIsOpen"  class="links">
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
            menuIsOpen: false,
            isBurgerActive: true
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
}

.content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
}

.basu-logo {
    height: 35px;
    margin: 5px 0;
}

#hamb-menu {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: transform .5s ease-in-out;
    user-select: none;
}

#hamb-menu span:nth-child(2) {
    margin: 5px 0;
}

#hamb-menu span {
    height: 2px;
    width: 20px;
    background-color: black;
    transition: transform .2s ease-in-out, opacity .2s ease-in-out;
}

#hamb-menu.open .burger-bar-1 {
    transform: translateY(7px) rotate(-45deg) ;
}


#hamb-menu.open .burger-bar-2 {
    opacity: 0;
}

#hamb-menu.open .burger-bar-3 {
    transform: translateY(-7px) rotate(45deg);
    top: 10px;
}



.social-links {
    display: flex;
}

.links {
    position: absolute;
    right: 0;
    width: 200px;
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