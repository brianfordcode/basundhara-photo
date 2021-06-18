<template>

    <div class="container">

      <div class="bio-img">
        <div class="text">
        <h1 class="about-me-title">About Me</h1>
        <p class="about-para">I'm Basundhara, a photographer and traveller. 
          <br>
          <br>
          Driven by the firm belief in Photography, I attempt to capture peoples' emotions in the most real terms. Be it for a professional headshot or capturing a couple on their retirement cruise, I manage to aid in creating fresh perspectives and everlasting moments.                    <br>
          <br>
          <br>
          I love connecting with people, listening to their stories, mutually creating new opportunities and thereby adding value in each other's life.
          <br>
          <br>
          <strong>Let's connect!</strong></p>
      </div>
      <img class="basu-pic" src="../assets/basundhara.png" alt="basundhara">
      </div>

      <div class="client-banner">
        <h1 class="my-work-title">My Work Has Been Seen In:</h1>
        <div class="clients">
          <img class="logos" v-for="clientlogo in clients" :src=clientlogo :key="clientlogo" />
        </div>
      </div>
     
    
    </div>
</template>

<script>

  

  export default {

    data: function() {
      return {
        clients: [
          require('../assets/logos/ace-update-logo.png'),
          require('../assets/logos/burgeon-law-logo.png'),
          require('../assets/logos/dailyhunt-logo.png'),
          require('../assets/logos/design-stories-logo.png'),
          require('../assets/logos/girltable-logo.png'),
          require('../assets/logos/herstory-logo.png'),
          require('../assets/logos/indian-express-indulge-logo.png'),
          require('../assets/logos/jewish-news-logo.png'),
          require('../assets/logos/lab-in-motion-logo.png'),
          require('../assets/logos/plus61j-media-logo.png'),
          require('../assets/logos/Rediff-logo.png'),
          require('../assets/logos/ria-dixit-logo.png'),
          require('../assets/logos/shaheen-logo.png'),
          require('../assets/logos/siliconindia-logo.gif'),
          require('../assets/logos/vpop-logo.jpg'),
          require('../assets/logos/zolie-skin-clinic-logo.png'),
          require('../assets/logos/KSLF-London-24-logo.png')
        ]
      }
    }
  }
  
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

@media screen and (max-width: 700px ) {
  .container {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
}



.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.about-me-title {
  font-family: 'dancing script', cursive;
  padding-bottom: 20px;
  font-size: 50px;
}

.about-para {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.bio-img {
  display: flex;
  align-items: center;
  padding: 0 20px;
}

.basu-pic {
  height: 275px;
}

@media screen and (max-width: 900px ) {
  .bio-img {
    flex-direction: column;
    align-items: center;
  }
}

.my-work-title {
  font-family: 'dancing script', cursive;
  text-align: center;
  margin-top: 10px;
}

.client-banner {
  /* border: 1px solid green; */
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

.clients {
  position:;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.logos {
  width: 75px;
  height: auto;
  margin: 10px;
  /* border: 1px solid pink; */
}

</style>