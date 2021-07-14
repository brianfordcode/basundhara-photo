<template>

<div class="container">
  <h1>How To Overcome Anxiety for a Photoshoot</h1>
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT4dynTcUKfw9hWPUZsjLEqxTrXC6-0SdeT9GBPKQL8vRrdW1Mg45AnbBVH9uP29CyzIathtz2SgTUY/embed?start=true&loop=true&delayms=3000" frameborder="0" width="800" height="490" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  <span></span>
  <h1>Podcast about Corporate Photography with Surojit Mahato</h1>
  <iframe width="800" height="490" src="https://www.youtube.com/embed/T4uz10czIOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <span></span>
  <h1>Clothing Tips for Men</h1>
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSGQ5ntcHgPpPs_cPfngF7T9x61tTM1CVlNciT6SCdqWpPSM7F8-KI9wFIzUZZcs4yTv9DQMb4o52zi/embed?start=true&loop=true&delayms=3000" frameborder="0" width="800" height="490" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>



</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  font-family: 'Dancing Script';
}

h1 {
  font-size: 30px;
}

/* span {
  border: 1px solid black;
  width: 100%;
} */

iframe {
  margin-top: 5px;
  margin-bottom: 25px;
}

span {
  margin-bottom: 20px;
  border: 1px solid black;
  width: 100%;
}

@media screen and (max-width: 1100px) {
  iframe {
    width: 600px;
    height: 375px;
  }
  h1 {
  font-size: 25px;
}
}
@media screen and (max-width: 900px) {
  iframe {
    width: 500px;
    height: 320px;
  }
  h1 {
  font-size: 20px;
  }
}
@media screen and (max-width: 700px) {
  .container {
    margin-top: 60px;
  }
}
@media screen and (max-width: 400px) {

  iframe {
    width: 350px;
    height: 233px;
  }
  h1 {
  font-size: 15px;
  }
}

</style>