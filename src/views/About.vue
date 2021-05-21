<template>
  <div class="container">


    <div class="wrapper">
      <div class="content">
        <h1>About Basundhara</h1>
        <p class="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu sem posuere, consequat mi in, varius ipsum. Donec accumsan diam commodo purus congue fringilla. Curabitur mollis est sapien, vitae ultricies nisl cursus ac. Proin condimentum odio nunc, vehicula sagittis nisi vehicula sed. Etiam et sodales arcu. Nulla mi magna, dictum eu sem quis, cursus laoreet eros. Morbi vel dolor purus. Duis accumsan purus non elit bibendum tincidunt. Fusce sagittis libero vitae mi imperdiet, ultrices volutpat justo laoreet. Donec non risus non mauris mattis hendrerit ac ut dolor. Nunc convallis quam eget leo eleifend, sit amet ullamcorper mauris molestie. Suspendisse tristique nulla enim, at bibendum nunc bibendum eget.
        <br>
        <br>
        Sed magna urna, aliquam eget iaculis non, sagittis at tellus. Vestibulum sit amet orci a nisl mollis convallis. Suspendisse dictum ligula eu vehicula dignissim. Nam elementum varius erat in tincidunt. In convallis ipsum quis lorem molestie convallis. Vestibulum rhoncus nisi quis rutrum porttitor. Vivamus nec interdum velit. Suspendisse mollis euismod velit, sit amet scelerisque odio tempor a. Maecenas sit amet arcu diam.
        </p>
      </div>
      
      <img class="basu-pic" src="../assets/basundhara.png" alt="basundhara"> 

    </div>
    
    <div class="client-banner">
     <h1>Who I've Worked With</h1>
     <div class="clients">
       <p>client 1</p>
       <p>client 2</p>
       <p>client 3</p>
       <p>client 4</p>
       <p>client 5</p>
     </div>
    </div>
   

  </div>
</template>

<script>

  

  export default {}
  
</script>

<style scoped>

.container {
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  /* padding: 50px; */
}

.wrapper {
  display: flex;
  align-items: center;
  /* border: 1px solid pink; */
  padding: 30px;
  justify-content: space-around;
  
}

.content {
  /* border: 1px solid black; */
  display: flex;
  padding-right: 20px;
  flex-direction: column;
  align-items: center;
}

h1 {
  padding-bottom: 30px;
}

.about-para {
  /* padding: 0 0 0 50px; */
  text-align: center;

}

.basu-pic {
  /* border: 1px solid blue; */
  height: 275px;
  /* padding: 5% 5% 5% 0; */
}

.client-banner {
  border: 1px solid black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.clients {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  /* padding: 10px; */
}

</style>