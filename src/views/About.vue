<template>
  <div class="container">

    <div class="wrapper">
      <div class="content">
        <h1>About Me</h1>
        <p class="about-para">{{ bio }}</p>
      </div>
      
      <div class="image-work">
        <img class="basu-pic" src="../assets/basundhara.png" alt="basundhara">
        
        <div class="client-banner">
          <h2>My Work Has Been Seen In:</h2>
          <div class="clients">
           <img class="clients-logos" v-for="clientlogo in clients" :src=clientlogo :key="clientlogo" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

  

  export default {

    data: function() {
      return {
        bio: `I'm Basundhara, a full-time photographer and traveller.
              Driven by the firm belief in Photography, I attempt to capture peoples' emotions in the most real terms. Be it for a professional headshot or capturing a couple on their retirement cruise, I manage to aid in creating fresh perspectives and everlasting moments.
              Graduating with an Engineering degree, I began my career at a tech startup where I learned the necessary tools for survival in a competitive environment.
              After a stint in Human Resources, I decided to take the plunge into professional photography in 2017. I found myself in a role that paid for me to travel on cruise ships and capture human emotions at their finest - with champagne and extraordinary vistas changing every moment.
              The joy of traveling over 40 countries is second only to the opportunity to meet people from twice as many nationalities. I found myself with people willing to share their stories and what traveling has taught them. It helped me mature as a photographer who captured not merely people's faces but the twinkle in their eyes.
              As a corporate headshot photographer, I create a substantial portfolio for people to use in their professional domain. I challenge myself to meet and exceed client expectations. I bring to the role my vast experience and skill in portrait photography.
              I love connecting with people, listening to their stories, mutually creating new opportunities and thereby adding value in each other's life.
              So, Leaders, Stylists, Podcasters, Coach, Trainers, Actors, Writers, Influencers, Digital marketer, Speakers, Independent Consultants, freelancers, Individual job seekers, SME business owners, Startups, Entrepreneurs, Firms who need a fresh branding, can reach out to me at probasundhara@gmail.com or just call/whatsapp me at 7042323412`,

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
          require('../assets/logos/vpop-logo.jpg')
        ]
      }
    }
  }
  
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

.container {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* justify-content: space-around; */
  /* padding: 50px; */
}

.wrapper {
  display: flex;
  /* align-items: center; */
  margin: 5%;
  max-width: 1500px;
  min-width: 1000px;
  /* border: 1px solid pink; */
  /* padding: 30px; */
  justify-content: space-around;
}

.content {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 50px;
  padding-left: 50px;
}

h1 {
  padding-bottom: 30px;
  font-family: 'dancing script', cursive;
}

.about-para {
  /* padding: 0 0 0 50px; */
  text-align: center;
  /* margin: 0 50px; */
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.image-work {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

}

.basu-pic {
  /* border: 1px solid blue; */
  height: 275px;
  border-radius: 20px;
  /* padding: 5% 5% 5% 0; */
}

h2 {
  font-family: 'dancing script', cursive;
  margin-top: 20px;
  margin-bottom: 5px;
}

.client-banner {
  /* border: 1px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* margin-top: 50px; */
}

.clients {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.clients-logos {
  width: 20px;
  margin: 10px;
  flex: 1 0 25%;
}

</style>