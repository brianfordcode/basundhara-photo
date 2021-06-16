<template>

  <div class="main-container">

    <h1 class="contact-me-title">Contact Me</h1>

      <div class="form-pic">
        <contactform />
        <img class="basu-contact-pic" src="../assets/basu-contact-pic.jpg" alt="basu-contact-pic">
      </div>

  </div>

</template>

<script>

import contactform from "../../public/contact-form.vue"

export default {

components: { contactform },

}


</script>

<style scoped>

.main-container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-me-title {
  font-family: 'dancing script', cursive;
  margin: 20px;
  font-size: 50px;
  text-align: center;
}

.form-pic {
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5%;
}

@media screen and (max-width: 800px ) {
  .form-pic {
    display: flex;
    flex-direction: column;
  }
}

.basu-contact-pic {
  height: 300px;
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