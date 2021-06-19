<template>

  <!-- GALLERY -->
  <div class="main-container">
    <h1>Portfolio</h1>
    <div class="images-container">
      <img class="images"
      v-for="image in images"
      @click="expandPic(image)"
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
    <div class="image-caption">
      <img class="selected-image" :src="selectedImage.url">
      <p class="caption">{{ selectedImage.caption }}</p>
    </div>
    <span class="closeBtn">&#10005;</span>
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
    }

  },

  data() {
    return {
      modalOpen: false,
      selectedImage: null,
      images: [
        {
          caption: "Amit Luthra_BRI_1671",
          url: "/linkedIn-headshots-small/1-shweta-chauhan-human-resource-specialist.jpg",
        },
        {
          caption: "Amit Luthra_BRI_1711",
          url: "/linkedIn-headshots-small/2-vandana-reception-manager-zolie-skin-clinic.jpg",
        },
        {
          caption: "Amit Luthra_BRI_1722",
          url: "/linkedIn-headshots-small/3-ritesh-kumar-legal-counsel.jpg",
        },
        {
          caption: "Brian-2",
          url: "/linkedIn-headshots-small/4-roma-priya-founder-burgeon-law.jpg",
        },
        {
          caption: "Brian-3",
          url: "/linkedIn-headshots-small/5-priyal-keni-international-rifle-shooter.jpg",
        },
        {
          caption: "Brian-5",
          url: "/linkedIn-headshots-small/6-rahul-rajput-pantry-manager-zolie-skin-clinic.jpg",
        },
        {
          caption: "Brian",
          url: "/linkedIn-headshots-small/7-francis-rebello-professor.jpg",
        },
        {
          caption: "Chandita _BAS_3637",
          url: "/linkedIn-headshots-small/8-brian-ford-director.jpg",
        },
        {
          caption: "Chandita_BAS_3669",
          url: "/linkedIn-headshots-small/9-shaheen-chishti-author.jpg",
        },
        {
          caption: "Deepak_DSC_4123_website",
          url: "/linkedIn-headshots-small/10-savita-kumari-professor.jpg",
        },
        {
          caption: "Francis_BRI_2771-Edit",
          url: "/linkedIn-headshots-small/11-shivani-khullar-analyst.jpg",
        },
        {
          caption: "Jayshree_BRI_4297",
          url: "/linkedIn-headshots-small/12-dr-nirupama-parwanda-dermatologist-zolie-skin-clinic.jpg",
        },
        {
          caption: "Jayshree_BRI_4304_web",
          url: "/linkedIn-headshots-small/13-raina-gupta-model.jpg",
        },
        {
          caption: "Kakoli_thumbnail",
          url: "/linkedIn-headshots-small/14-jayshree-dugar-legal-associate.jpg",
        },
        {
          caption: "Kakoli_BRI_1479",
          url: "/linkedIn-headshots-small/15-Ship-portrait.jpg",
        },
        {
          caption: "Kakoli_BRI_1810",
          url: "/linkedIn-headshots-small/16-ria-dixit-personal-stylist.jpg",
        },
        {
          caption: "Kakoli_BRI_2190-Edit",
          url: "/linkedIn-headshots-small/17-sapna-skin-therapist-zolie-skin-clinic.jpg",
        },
        {
          caption: "Priyal_BRI_2887",
          url: "/linkedIn-headshots-small/18-Shrut-artist.jpg",
        },
        {
          caption: "Priyal_BRI_2902",
          url: "/linkedIn-headshots-small/19-Vijay-jayswal-cloud-consultant.jpg",
        },
      ]
    }
  }
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


h1 {
  padding: 30px;
  font-size: 50px;
  font-family: 'dancing script', cursive;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}

.images {
  height: 250px;
  overflow: hidden;
  margin: 5px;
  transition: .2s, fade-in-out;
  cursor: zoom-in;
  user-select: none;
}

.images:hover {
  transform: scale(1.03);
}

/* MODAL */
.modal {
  position: fixed;
  top: 0;
  left: 210px;
  right: 0;
  bottom: 0;
  background-color: rgba(184, 184, 184, 0.5);
  display: none;
  cursor: pointer;
}

.modal.open {
  display: flex;
}

.selected-image {
  user-select: none;
  height: 80%;
  transition: .2s, fade-in-out;
}



.image-caption {
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
  left: 95%;
  top: 5%;
}

@media screen and (max-width: 1100px) {
  .selected-image {
    height: 60%;
  }
}
@media screen and (max-width: 900px) {
  .selected-image {
    height: 40%;
  }
}

@media screen and (max-width: 700px) {
  .selected-image {
    height: 40%;
  }


  .main-container {
    margin-top: 50px;
  }
  .modal { 
    left: 0;
    background-color: black;
  }
  .closeBtn { 
    color: white;
    top: 20%;
    left: 85%;
  }
}




</style>