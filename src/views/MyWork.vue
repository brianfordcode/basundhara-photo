<template>

<div class="main-container">
  <h1>My Work</h1>  
  <div class="images-container">
    <img class="images" v-for="image in images" :src="image" :key="image">
  </div>
</div>
 
<div class="selected-image"></div>


</template>

<script>

export default {

  data() {
    return {
      images: [      
        require("../assets/portraits/Amit Luthra_BRI_1671.jpg"),
        require("../assets/portraits/Amit Luthra_BRI_1711.jpg"),
        require("../assets/portraits/Amit Luthra_BRI_1722.jpg"),
        require("../assets/portraits/BRIAN-1.jpeg"),
        require("../assets/portraits/Brian-2.jpeg"),
        require("../assets/portraits/Brian-3.jpeg"),
        require("../assets/portraits/Brian-5.jpeg"),
        require("../assets/portraits/Brian.jpeg"),
        require("../assets/portraits/Chandita _BAS_3637.jpg"),
        require("../assets/portraits/Chandita_BAS_3669.jpg"),
        require("../assets/portraits/Deepak_DSC_4123_website.jpg"),
        require("../assets/portraits/Francis_BRI_2771-Edit.jpg"),
        require("../assets/portraits/Jayshree_BRI_4297.jpg"),
        require("../assets/portraits/Jayshree_BRI_4304_web.jpg"),
        require("../assets/portraits/Kakoli_thumbnail.jpg"),
        require("../assets/portraits/Kakoli_BRI_1479.jpg"),
        require("../assets/portraits/Kakoli_BRI_1810.jpg"),
        require("../assets/portraits/Kakoli_BRI_2190-Edit.jpg"),
        require("../assets/portraits/Priyal_BRI_2887.jpg"),
        require("../assets/portraits/Priyal_BRI_2902.jpg"),
        require("../assets/portraits/Priyal_BRI_2923.jpg"),
        require("../assets/portraits/Priyal_BRI_2993.jpg"),
        require("../assets/portraits/Ria_BRI_4254-Web.jpg"),
        require("../assets/portraits/Ria_BRI_4012-Web.jpg"),
        require("../assets/portraits/Ria_BRI_4076-Web.jpg"),
        require("../assets/portraits/Ria_BRI_4214-Web.jpg"),
        require("../assets/portraits/Ria_BRI_4239-Web.jpg"),
        require("../assets/portraits/Ria_BRI_4250-Web.jpg"),
        require("../assets/portraits/Ritesh_BRI_3778-Social Media.jpg"),
        require("../assets/portraits/Roma_2.jpeg"),
        require("../assets/portraits/Roma_6.jpeg"),
        require("../assets/portraits/ROMA_BRI_3351.jpg"),
        require("../assets/portraits/ROMA_BRI_3370.jpg"),
        require("../assets/portraits/ROMA_BRI_9769_Large-Size.jpg"),
        require("../assets/portraits/ROMA_thumbnail.jpg"),
        require("../assets/portraits/Roma.jpeg"),
        require("../assets/portraits/Rutuja.jpg"),
        require("../assets/portraits/Savita_BRI_3863 .jpg"),
        require("../assets/portraits/Savita_BRI_3761-Social Media.jpg"),
        require("../assets/portraits/Savita_BRI_3863  copy.jpg"),
        require("../assets/portraits/Shaheen_BRI_4345_for Social Media.jpg"),
        require("../assets/portraits/Shaheen_BRI_4519_for Social Media.jpg"),
        require("../assets/portraits/Shaheen_BRI_4557_for Social Media.jpg"),
        require("../assets/portraits/ShaheenBRI_4399_for Social Media.jpg"),
        require("../assets/portraits/ShaheenBRI_4451_for Social Media.jpg"),
        require("../assets/portraits/Ship portrait 1.jpeg"),
        require("../assets/portraits/Shivani_BRI_3516.jpg"),
        require("../assets/portraits/Shruti 2.jpeg"),
        require("../assets/portraits/Shweta_2.jpeg"),
        require("../assets/portraits/Shweta_BAS_3647_BlackBG.jpg"),
        require("../assets/portraits/Vijay_BRI_1774.jpg"),
        require("../assets/portraits/Zolie_BRI_8446.jpg"),
        require("../assets/portraits/Zolie_BRI_8466.jpg"),
        require("../assets/portraits/Zolie_BRI_8525.jpg"),
        require("../assets/portraits/Zolie_BRI_8548.jpg"),
        require("../assets/portraits/Zolie_Nirupama 1.jpeg"),
        require("../assets/portraits/Zolio_BRI_8437.jpg"),
      ]
    }
  }
}
</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid blue; */
  width: 100%;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  /* border: 1px solid black; */
  justify-content: space-evenly;
}

.images {
  width: auto;
  height: 300px;
  margin: 5px;
  cursor: zoom-in;
  transition: .2s, fade-in-out;
  /* border: 1px solid blue; */
}

.images:hover {
  transform: scale(1.03);
}

h1 {
  padding: 30px;
  font-size: 50px;
  font-family: 'dancing script', cursive;
}

/* .selected-image {
  position: absolute;
  background-color: black;
  height: 70%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;

} */


</style>