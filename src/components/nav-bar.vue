<template>

    <div class="nav">

        <h1>Basundhara</h1>

        <div class="links">
            <router-link to="./MyWork">My Work</router-link> 
            <router-link to="./About">About Me</router-link> 
            <router-link to="./Contact">Contact Me</router-link> 
            <router-link to="./HeadshotTips">Headshot Tips</router-link>
        </div>

        <div class="social-links">
          <social class="social" social="facebook"></social>
          <social class="social" social="linkedin"></social>
          <social class="social" social="instagram"></social>
        </div>
        
    </div>

</template>


<style scoped>

.nav {
  width: 225px;
  height: 100vh;
  background-color: rgb(233, 233, 233);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.links {
  display: flex;
  flex-direction: column;
  text-align: right;
  transform: translate(20px, -100px);
}

.links > * {
  text-decoration: none;
  color: black;
  margin: 20px;
  font-size: 20px;
  transition: .2s, fade-in-out;
}

.links > *:hover {
  color: blue;
}

.social {
  cursor: pointer;
  height: 40px;
  transition: .2s, fade-in-out;
  margin: 0 10px;
}

.social:hover {
  transform: scale(1.2);
}
</style>




<script>
import social from "../components/social-links.vue"
// import about from "../views/About.vue"

export default {
    components: { social }
}

</script>
