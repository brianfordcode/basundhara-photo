<template>

<!-- GALLERY -->
<div ref="main-container" class="main-container">
  <h1>My Work</h1>
  <div class="images-container">
    <img
      v-for="image in images"
      @click="expandPic(image)"
      class="images"
      :src="image"
      :key="image"
    >
  </div>
</div>

<!-- OPEN PICTURE -->

<div @click="closePic" :class="{ modal: true, open: modalOpen }">

  <div class="image-cap">
    <img class="selected-image" :src="selectedImageSrc">
    <p class="caption">CAPTION</p>
  </div>
  

 
  <span @click="closePic" class="closeBtn">&#10005;</span>
</div>

</template>

<script>



export default {

  methods: {

    expandPic(image) {
      this.selectedImageSrc = image
      this.modalOpen = true
    },

    closePic() {
      this.modalOpen = false
      console.log('click')
    }

  },

  data() {
    return {
      modalOpen: false,
      selectedImageSrc: null,
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


/* MODAL */
.modal {
  position: fixed;
  top: 0;
  left: 210px;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: all;
  background-color: rgba(184, 184, 184, 0.5);
  display: none;
  cursor: pointer;
}

.modal.open {
  display: flex;
}

.selected-image {
  height: 80%;
}

.image-cap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.caption {
  margin: 10px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.closeBtn {
  position: absolute;
  font-size: 30px;
  cursor: pointer;
  left: 95%;
  top: 5%;
}


</style>