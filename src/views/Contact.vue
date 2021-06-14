<template>

<div class="main-container">

  <h1 class="contact-me-title">Contact Me</h1>

    <div class="form-pic">
      <contactform />
      <img class="basu-contact-pic" src="../assets/basu-contact-pic.jpg" alt="basu-contact-pic">
    </div>

  <div class="contacts">
        <a href="mailto:probasundhara@gmail.com">email: probasundhara@gmail.com</a>
        <a href="tel:7042323412">phone: 7042323412</a>
  </div>

</div>

 
  




</template>

<script>

import contactform from "../components/contact-form.vue"

export default {

components: { contactform },

}


</script>

<style scoped>

.main-container {
  width: 100%;
  /* max-width: 1000px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
}

.contact-me-title {
  font-family: 'dancing script', cursive;
  margin: 20px;
  font-size: 50px;
  text-align: center;
  /* border: 1px solid black; */
}

.form-pic {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
  /* border: 1px solid black; */
}

.basu-contact-pic {
  height: 300px;
  border-radius: 20px;
}

.contacts {
  /* margin-top: 50px; */
  /* border: 1px solid black; */
  /* padding: 20px; */
  margin-top: 100px;
}

a {
  margin: 20px;
  text-decoration: none;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transition: .2s, fade-in-out;
}

a:hover {
  color:rgb(30, 30, 114);
}

</style>