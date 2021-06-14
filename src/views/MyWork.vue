<template>

<!-- GALLERY -->
<div ref="main-container" class="main-container">
  <h1>My Work</h1>
  <div class="images-container">
    <img
      v-for="image in images"
      @click="expandPic(image)"
      class="images"
      :src="image.url"
      :key="image"
    >
  </div>
</div>

<!-- OPEN PICTURE -->

<div
  @click="closePic"
  v-if="selectedImage"
  :class="{ modal: true, open: modalOpen }">
  <div class="image-cap">
    <img class="selected-image" :src="selectedImage.url">
    <p class="caption">{{ selectedImage.caption }}</p>
  </div>
  

 
  <span @click="closePic" class="closeBtn">&#10005;</span>
</div>

</template>

<script>



export default {

  methods: {

    expandPic(image) {
      this.selectedImage = image
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
      selectedImage: null,
      images: [
        {
          caption: "Amit Luthra_BRI_1671",
          url: require("../assets/portraits/Amit Luthra_BRI_1671.jpg"),
        },
        {
          caption: "Amit Luthra_BRI_1711",
          url: require("../assets/portraits/Amit Luthra_BRI_1711.jpg"),
        },
        {
          caption: "Amit Luthra_BRI_1722",
          url: require("../assets/portraits/Amit Luthra_BRI_1722.jpg"),
        },
        {
          caption: "Brian-2",
          url: require("../assets/portraits/Brian-2.jpeg"),
        },
        {
          caption: "Brian-3",
          url: require("../assets/portraits/Brian-3.jpeg"),
        },
        {
          caption: "Brian-5",
          url: require("../assets/portraits/Brian-5.jpeg"),
        },
        {
          caption: "Brian",
          url: require("../assets/portraits/Brian.jpeg"),
        },
        {
          caption: "Chandita _BAS_3637",
          url: require("../assets/portraits/Chandita _BAS_3637.jpg"),
        },
        {
          caption: "Chandita_BAS_3669",
          url: require("../assets/portraits/Chandita_BAS_3669.jpg"),
        },
        {
          caption: "Deepak_DSC_4123_website",
          url: require("../assets/portraits/Deepak_DSC_4123_website.jpg"),

        },
        {
          caption: "Francis_BRI_2771-Edit",
          url: require("../assets/portraits/Francis_BRI_2771-Edit.jpg"),
        },
        {
          caption: "Jayshree_BRI_4297",
          url: require("../assets/portraits/Jayshree_BRI_4297.jpg"),
        },
        {
          caption: "Jayshree_BRI_4304_web",
          url: require("../assets/portraits/Jayshree_BRI_4304_web.jpg"),
        },
        {
          caption: "Kakoli_thumbnail",
          url: require("../assets/portraits/Kakoli_thumbnail.jpg"),
        },
        {
          caption: "Kakoli_BRI_1479",
          url: require("../assets/portraits/Kakoli_BRI_1479.jpg"),
        },
        {
          caption: "Kakoli_BRI_1810",
          url: require("../assets/portraits/Kakoli_BRI_1810.jpg"),
        },
        {
          caption: "Kakoli_BRI_2190-Edit",
          url: require("../assets/portraits/Kakoli_BRI_2190-Edit.jpg"),
        },
        {
          caption: "Priyal_BRI_2887",
          url: require("../assets/portraits/Priyal_BRI_2887.jpg"),
        },
        {
          caption: "Priyal_BRI_2902",
          url: require("../assets/portraits/Priyal_BRI_2902.jpg"),
        },
        {
          caption: "Priyal_BRI_2923",
          url: require("../assets/portraits/Priyal_BRI_2923.jpg"),
        },
        {
          caption: "Priyal_BRI_2993",
          url: require("../assets/portraits/Priyal_BRI_2993.jpg"),
        },
        {
          caption: "Ria_BRI_4254-Web",
          url:require("../assets/portraits/Ria_BRI_4254-Web.jpg"),
        },
        {
          caption: "Ria_BRI_4012-Web",
          url: require("../assets/portraits/Ria_BRI_4012-Web.jpg"),
        },
        {
          caption: "Ria_BRI_4076-Web",
          url:require("../assets/portraits/Ria_BRI_4076-Web.jpg"),
        },
        {
          caption: "Ria_BRI_4214-Web",
          url:require("../assets/portraits/Ria_BRI_4214-Web.jpg"),
        },
        {
          caption: "Ria_BRI_4239-Web",
          url: require("../assets/portraits/Ria_BRI_4239-Web.jpg"),
        },
        {
          caption: "Ria_BRI_4250-Web",
          url:require("../assets/portraits/Ria_BRI_4250-Web.jpg"),
        },
        {
          caption: "Ritesh_BRI_3778-Social Media",
          url:require("../assets/portraits/Ritesh_BRI_3778-Social Media.jpg"),
        },
        {
          caption: "Roma_2",
          url: require("../assets/portraits/Roma_2.jpeg"),
        },
        {
          caption: "Roma_6",
          url: require("../assets/portraits/Roma_6.jpeg"),
        },
        {
          caption: "ROMA_BRI_3351",
          url: require("../assets/portraits/ROMA_BRI_3351.jpg"),
        },
        {
          caption: "ROMA_BRI_3370",
          url: require("../assets/portraits/ROMA_BRI_3370.jpg"),
        },
        {
          caption: "ROMA_BRI_3351",
          url: require("../assets/portraits/ROMA_BRI_3351.jpg"),
        },
        {
          caption: "ROMA_BRI_9769_Large-Size",
          url: require("../assets/portraits/ROMA_BRI_9769_Large-Size.jpg"),
        },
        {
          caption: "ROMA_thumbnail",
          url: require("../assets/portraits/ROMA_thumbnail.jpg"),
        },
        {
          caption: "Roma",
          url: require("../assets/portraits/Roma.jpeg"),
        },
        {
          caption: "Rutuja",
          url: require("../assets/portraits/Rutuja.jpg"),
        },
        {
          caption: "Savita_BRI_3863",
          url: require("../assets/portraits/Savita_BRI_3863 .jpg"),
        },
        {
          caption: "Savita_BRI_3761-Social Media",
          url: require("../assets/portraits/Savita_BRI_3761-Social Media.jpg"),
        },
        {
          caption: "Savita_BRI_3863  copy",
          url: require("../assets/portraits/Savita_BRI_3863  copy.jpg"),
        },
        {
          caption: "Shaheen_BRI_4345_for Social Media",
          url: require("../assets/portraits/Shaheen_BRI_4345_for Social Media.jpg"),
        },
        {
          caption: "Shaheen_BRI_4519_for Social Media",
          url: require("../assets/portraits/Shaheen_BRI_4519_for Social Media.jpg"),
        },
        {
          caption: "Shaheen_BRI_4557_for Social Media",
          url: require("../assets/portraits/Shaheen_BRI_4557_for Social Media.jpg"),
        },
        {
          caption: "ShaheenBRI_4399_for Social Media",
          url:require("../assets/portraits/ShaheenBRI_4399_for Social Media.jpg"),
        },
        {
          caption: "ShaheenBRI_4451_for Social Media",
          url:require("../assets/portraits/ShaheenBRI_4451_for Social Media.jpg"),
        },
        {
          caption: "Ship portrait 1",
          url:require("../assets/portraits/Ship portrait 1.jpeg"),
        },
        {
          caption: "Shivani_BRI_3516",
          url:require("../assets/portraits/Shivani_BRI_3516.jpg"),
        },
        {
          caption: "Shruti 2",
          url:require("../assets/portraits/Shruti 2.jpeg"),
        },
        {
          caption: "Shweta_2",
          url: require("../assets/portraits/Shweta_2.jpeg"),
        },
        {
          caption: "Shweta_BAS_3647_BlackBG",
          url: require("../assets/portraits/Shweta_BAS_3647_BlackBG.jpg"),
        },
        {
          caption: "Shweta_BAS_3647_BlackBG",
          url: require("../assets/portraits/Shweta_BAS_3647_BlackBG.jpg"),
        },
        {
          caption: "Vijay_BRI_1774",
          url: require("../assets/portraits/Vijay_BRI_1774.jpg"),
        },
        {
          caption: "Zolie_BRI_8446",
          url: require("../assets/portraits/Zolie_BRI_8446.jpg"),
        },
        {
          caption: "Zolie_BRI_8466",
          url: require("../assets/portraits/Zolie_BRI_8466.jpg"),
        },
        {
          caption: "Zolie_BRI_8525",
          url: require("../assets/portraits/Zolie_BRI_8525.jpg"),
        },
        {
          caption: "Zolie_BRI_8548",
          url: require("../assets/portraits/Zolie_BRI_8548.jpg"),
        },
        {
          caption: "Zolie_Nirupama 1",
          url: require("../assets/portraits/Zolie_Nirupama 1.jpeg"),
        },
        {
          caption: "Zolio_BRI_8437.",
          url: require("../assets/portraits/Zolio_BRI_8437.jpg"),
        },
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