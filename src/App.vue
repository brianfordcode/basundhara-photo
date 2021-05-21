<template>



  
  <router-view/>

  <div class="nav">

    <h1>Basundhara</h1>

    <div class="links">
      <router-link to="/">Home</router-link> 
      <router-link to="/">My Work</router-link> 
      <router-link to="/">About Me</router-link> 
      <router-link to="/">Contact Me</router-link> 
      <router-link to="/">Headshot Tips</router-link>
    </div>

    <div class="links">
          <social class="social" social="facebook"></social>
          <social class="social" social="linkedin"></social>
          <social class="social" social="instagram"></social>
    </div>
    
  </div>



</template>

<style scoped>

.nav {
  width: 300px;
  height: 100vh;
  background-color: grey;
}

h1 {
  display: flex;
  padding-top: 30px;
  align-items: center;
  justify-content: space-around;
}

.links {
  display: flex;
  flex-direction: column;
  text-align: right;
  padding-right: 30px;
  padding-top: 50px;
}

.links > * {
  text-decoration: none;
  color: black;
  margin: 20px;
  font-size: 20px;
}


</style>
