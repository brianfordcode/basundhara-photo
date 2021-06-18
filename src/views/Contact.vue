<template>

  <div class="main-container">

    <h1 class="contact-me-title">Contact Me</h1>

    <iframe src="https://form.jotform.com/211670931018046" frameBorder="0" title="contact-me">test</iframe>

  </div>

</template>

<script>

export default {

}


</script>

<style scoped>

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 700px ) {
  .main-container {
    margin-top: 40px;
  }
}

.contact-me-title {
  font-family: 'dancing script', cursive;
  margin: 20px;
  font-size: 50px;
  text-align: center;
}

iframe {
  height: 1950px;
  width: 100%;
  border: 0;
  outline: none;
}

</style>