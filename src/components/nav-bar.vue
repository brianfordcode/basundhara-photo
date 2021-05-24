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
  width: 210px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex-shrink: 0;
  flex-grow: 0;
}

/* TITLE */

h1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  /* border: 1px solid black; */
}
/* PAGE LINKS */
.links {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* border: 1px solid black; */
  flex-grow: 2;
}

.links > * {
  text-decoration: none;
  color: black;
  margin: 20px 0;
  font-size: 20px;
  transition: .2s, fade-in-out;
}

.links > *:hover {
  color: blue;
}

/* SOCIAL LINKS */

.social-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  /* border: 1px solid black; */
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
