<template>


  <div class="contact-container">
    <h1>Contact Me</h1>
    <div class="contacts">
        <a href="mailto:probasundhara@gmail.com">probasundhara@gmail.com</a>
        <a href="tel:7042323412">7042323412</a>
    </div>
    
  </div>
  
  




</template>

<script>
export default {

}
</script>

<style scoped>

.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

h1 {
  font-family: 'dancing script', cursive;
  padding: 20px;
  font-size: 50px;
}

.contacts {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid black; */
}

a {
  margin: 20px;
  text-decoration: none;
  color: rgb(230, 230, 230);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: rgb(30, 30, 114);
  padding: 20px;
  border-radius: 50px;
  transition: .2s, fade-in-out;
}
a:hover {
  transform: scale(1.1);
}

</style>