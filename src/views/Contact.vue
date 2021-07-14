<template>

  <div class="main-container">

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
    margin-top: 50px;
  }
}

iframe {
  height: 1800px;
  width: 100%;
  border: 0;
  outline: none;
}

</style>