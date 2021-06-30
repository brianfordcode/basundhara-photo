<template>



<div class="entire-page">

  <h1 class="title">Portfolio</h1>


  <!-- PORTRAITS -->
  <div class="category-container">
    <h1 class="category-title">Portraits</h1>
    <div class="main-container">
        <div id="portraits" class="images-container">
            <img class="images"
            v-for="image in portraits"
            @click="expandPic(image)"
            :src="image.url"
            :key="image"
            >
        </div>
      </div>
    <div class="position-bar">o o o o o o o o o o o o o</div>
  </div>
    

  <!-- LINKEDIN HEADSHOTS -->
  <div class="category-container">
      <h1 class="category-title">LinkedIn Headshots</h1>
      <div class="main-container">
          <div id="linkedin-headshots" class="images-container">
            <img class="images"
            v-for="image in linkedinHeadshots"
            @click="expandPic(image)"
            :src="image.url"
            :key="image"
            >
          </div>
      </div>
      <div class="position-bar">o o o o o o o o o o o o o</div>
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
      linkedinHeadshots: [
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
      ],
      portraits: [
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/1-raina-gupta-model-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/2-brian-ford-director-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/3-ria-dixit-personal-stylist.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/4-dr-nirupama-parwanda-dermatologist-zolie-skin-clinic.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/5-chandita-barman-legal-advisor.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/6-amit-luthra-photographer-artist-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/7-jayshree-dugar-legal-associate.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/8-shaheen-chishti-founder-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/9-brian-ford-director.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/9-ria-dixit-personal-stylist-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/10-priyal-keni-international-rifle-shooter-3.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/11-roma-priya-founder-burgeon-law-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/12-raina-gupta-model.-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/13-amit-luthra-photographer-artist-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/14-ria-dixit-personal-stylist-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/15-priyal-keni-international-rifle-shooter-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/16-raina-gupta-model-3.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/17-deepak-menon-partner-JP-kapur-&-uberai-chartered-accountants.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/18-priyal-keni-international-rifle-shooter-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/19-brian-ford-film-maker-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/20-roma-priya-founder-burgeon-law-1.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/21-Savita_BRI_3761-Social Media.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/22-shaheen-chishti-founder-2.jpg",
        },
        {
          caption: "1-raina-gupta-model-1",
          url: "/portraits/23-ria-dixit-personal-stylist-3.jpg",
        },
      ]
    }
  }
}
</script>

<style scoped>

.entire-page {
  /* border: 1px solid pink; */
  overflow: hidden;
}

.title {
  text-align: center;
  margin: 30px;
  font-family: 'dancing script', cursive;
  font-size: 50px;
}

.category-title {
  margin-left: 30px;
  font-family: 'dancing script', cursive;
}

.category-container {
  /* border: 1px solid black; */
  margin-bottom: 30px;
}

.main-container {
  position: relative;
  height: min-content;
  overflow-x: scroll;
  /* border: 1px solid green; */
}

.main-container::-webkit-scrollbar {
  display: none;
}

.images-container {
  width: min-content;
  height: min-content;
  display: flex;
  /* border: 1px solid blue; */
}

.images {
  height: 200px;
  margin: 5px;
  transition: .2s, fade-in-out;
  cursor: zoom-in;
  user-select: none;
}

.images:hover {
  transform: scale(1.03);
}

.position-bar {
  text-align: center;
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
    height: 80%;
  }
}
@media screen and (max-width: 900px) {
  .selected-image {
    height: 60%;
  }
}
@media screen and (max-width: 700px) {
  .main-container {
    width: 100%;
    margin-top: 50px;
  }
  .selected-image {
    height: 60%;
  }
  .modal { 
    left: 0;
    background-color: black;
  }
  .closeBtn { 
    color: white;
    top: 10%;
    left: 85%;
  }
}

</style>