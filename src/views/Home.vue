<template>

  <div class="container">

    <div class="banner">
      <div class="banner-content">

        <div class="title">
          <h1>Basundhara</h1>
          <h3>Professional Headshots | Corporate Photography |</h3>
          <h3>Branding and Commercial Photoshoots</h3>
        <router-link class="button" to="/about"><p>Enter</p></router-link>
        </div>

        <div class="links">
          <a href="#">fb</a> |
          <a href="#">linkedin</a> |
          <a href="#">insta</a>
        </div>
         
      </div>
      
    </div>

  </div>

</template>

<script>


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

.container {
  background-image: url('../assets/background.jpg');
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.banner {
  background-color: rgb(255, 255, 255);
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
  padding: 20px 40px;
  margin-top: 40px;
  border: none;
  border: 2px solid black;
  background-color: white;
  transition: 1;
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


</style>
