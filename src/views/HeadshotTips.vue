<template>

<div class="container">
  <h1>HeadShot Tips</h1>

  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vT4dynTcUKfw9hWPUZsjLEqxTrXC6-0SdeT9GBPKQL8vRrdW1Mg45AnbBVH9uP29CyzIathtz2SgTUY/embed?start=true&loop=true&delayms=3000" frameborder="0" width="800" height="490" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  
  <iframe width="800" height="490" src="https://www.youtube.com/embed/T4uz10czIOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

h1 {
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-family: 'Dancing Script';
}

iframe {
  margin-bottom: 20px;
}

@media screen and (max-width: 1100px) {
  iframe {
    width: 600px;
    height: 375px;
  }
}
@media screen and (max-width: 900px) {
  iframe {
    width: 500px;
    height: 320px;
  }
}

@media screen and (max-width: 700px) {
  h1 {
    margin-top: 70px;
  }
  
}
@media screen and (max-width: 400px) {
  h1 {
    font-size:40px;
    margin-top: 70px;
  }
  iframe {
    width: 350px;
    height: 233px;
  }
}




</style>