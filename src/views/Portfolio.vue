<template>

<div class="entire-page">

  <h1 class="title">Portfolio</h1>


  <!-- PORTRAITS -->

  <!-- MAIN VW PAGE PINK -->
  <div
    ref="mainContainer"
    class="category-container"
    @mousedown="startDrag"
    @mousemove="mouseMove"
    @mouseleave="tooltipIsVisible = false"
  >
    <h1 class="category-title">Portraits</h1>

    <!-- BOX OF ALL PICTURES BLUE -->
    <div
      ref="testimonialContainer"
      id="portraits"
      
      @scroll="updatePortraitsScrollPosition"
      :class="{
              'images-container': true,
              'not-dragging': !dragging
          }"
          :style="{
              transform: `translateX(${ position }px)`
          }"
    >

    

      <!-- INDIVIDUAL PICTURES BLACK -->
        <img draggable="false" class="images"
          @mouseenter="makeTooltipVisible()"
          @mouseleave="tooltipIsVisible = false"
          v-for="image in portraits"
          @click="expandPic(image)"
          :src="image.url"
          :key="image"
        >
      </div>

    <div class="scroll-bar">
      <div
        class="position-button"
        v-for="(image, index) in portraits"
        :key="image"
        @click="scrollToChild(portraitsElement, index)"
      >
      </div>
    </div>

      <span
        ref="tooltip"
        v-if="tooltipIsVisible"
        class="tooltip"
        :style="{
          transform: `translate(${ posX }px, ${ posY }px)`
        }"
      >
      Double Click to Expand
      </span>



  </div>

      
      
  </div>
    

  <!-- LINKEDIN HEADSHOTS -->
  <!-- <div class="category-container">
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
      <div class="position-bar"></div>
  </div> -->

  
  <!-- OPEN PICTURE -->
  <div
    @click="closePic"
    v-if="selectedImage"
    :class="{ modal: true, open: modalOpen }">
    <div class="image-caption">
      <img draggable="false" class="selected-image" :src="selectedImage.url">
      <p class="caption">{{ selectedImage.caption }}</p>
    </div>
    <span class="closeBtn">&#10005;</span>
  </div>


</template>

<script>

export default {

  mounted() {
      window.addEventListener('mouseup', this.endDrag)
  },
  unmounted() {
      window.removeEventListener('mouseup', this.endDrag)
  },

  data() {
    return {
      dragging: false,
      position: 0,
      modalOpen: false,
      selectedImage: null,
      tooltipIsVisible: false,
      posX: 0,
      posY: 0,
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
  },

  methods: {

    // DRAGGING SLIDER
    startDrag(e) {
        this.dragging = true
        this.tooltipIsVisible = false
        this.lastX = e.clientX
        this.modalOpen = false
    },

    mouseMove(e) {
        const changeInX = e.clientX - this.lastX
this.modalOpen = false
        // TOOLTIP MOVES WITH MOUSE
        this.posX = e.clientX - 205
        this.posY = e.clientY - 395

        
        // IF TOOLTIP IS AT EDGE OF RIGHT SCREEN, ALTER X


        const vw = document.documentElement.clientWidth;
        
        if (vw === ((this.posX + 205) - 37)) {
          console.log('at the edge')
        }

        if (this.dragging) {

            this.position += changeInX
            this.lastX = e.clientX
            
            // tooltip disappears
            this.tooltipIsVisible = false
        }
    },

    endDrag() {
      this.modalOpen = false
        this.dragging = false
        this.tooltipIsVisible = false

        if (this.position > 0) this.position = 0
        else {
            const tWidth = this.$refs.testimonialContainer.offsetWidth
            const mWidth = this.$refs.mainContainer.offsetWidth
            // clamp new position so that there is no whitespace to the right
            this.position = Math.max(mWidth - tWidth, this.position)
        }
    },


    makeTooltipVisible() {
      setTimeout(() => {this.tooltipIsVisible = true}, 1500)
    },




// EXPANDING IMAGE
    expandPic(image) {
        this.selectedImage = image
        this.modalOpen = true
    },

    closePic() {
      this.modalOpen = false
    }

  },

  
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
  /* border: 1px solid pink; */
  margin-bottom: 30px;
  overflow: hidden;

}

.main-container::-webkit-scrollbar {
  display: none;
}

.images-container {
  user-select: none;
  width: min-content;
  height: min-content;
  display: flex;
  /* border: 1px solid blue; */
}

.images {
  /* border: 1px solid black; */
  height: 200px;
  margin: 5px;
  transition: .2s, fade-in-out;
  cursor: grab;
  user-select: none;
  box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
}

.images:hover {
  transform: scale(1.03);
}

.not-dragging
{
    transition: 0.20s transform ease-out;
}

.tooltip {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  position: absolute;
  z-index: 10000;
  opacity: 0.7;
  user-select: none;
}


.scroll-bar {
  display: flex;
  max-width: min-content;
  margin: 10px auto;
}

.position-button {
  margin: 0 5px;
  border: 1px solid rgba(0,0,0,0.4);
  height: 7px;
  width: 7px;
  border-radius: 50px;
  cursor: pointer;
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