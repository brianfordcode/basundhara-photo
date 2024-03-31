<template>

  <div class="main-container">

    <div class="categories">
      <p
        :class="{'text-selected': headshotsSelected}"
        @click="headshotsSelected = true, brandingSelected = false"
        style="cursor: pointer;"
      >
      Headshots
    </p>
      
      <p
        :class="{'text-selected': brandingSelected}"
        @click="brandingSelected = true, headshotsSelected = false"
        style="cursor: pointer;"
      >
      Personal Branding
      </p>
    </div>

    <div class="entire-portfolio">

<!-- HEADSHOTS -->
    <div
      v-for="(pic, index) in headshots"
      :key="pic"
      class="img-container"
      v-if="headshotsSelected"
    >
      <img
        v-if="pic.type === 'headshot'"
        class="image"
        @click="expand(index)"
        draggable="false"
        :src="pic.url"
        alt="pic"
      />
    </div>

    <!-- BRANDING -->
    <div
      v-for="(pic, index) in branding"
      :key="pic"
      class="img-container"
      v-if="brandingSelected"
    >
      <img
        v-if="pic.type === 'branding'"
        class="image"
        @click="expand(index)"
        draggable="false"
        :src="pic.url"
        alt="pic"
      />
    </div>

  </div>

    <!-- MODAL -->
    <div
      v-if="selectedImage"
      :class="{ modal: true, open: modalOpen }"
      @click="closePic"
    >
      <img draggable="false" class="selected-image" :src="selectedImage.url">
    </div>


    <!-- <div class="entire-page">

        <p class="category-title">Branding and Editorial Portraits</p>
        <Carousel :items="portraits" />

        <p class="category-title">LinkedIn and Corporate Headshots</p>
        <Carousel :items="linkedinHeadshots" />
        
    </div> -->

  </div>

  
</template>

<script>

  // import Carousel from '../components/Carousel.vue'

  export default {
    // components: {
    //   Carousel
    // },

    data() {
      return {
        headshotsSelected: true,
        brandingSelected: false,
        branding: [
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/99-pic-min.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/340_3-min.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/13_09_23__Studio_237.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/13_09_23__Studio_289.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/13_09_23_Web_74.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/13_09_23_Web_166.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/14_09_23_outdoor_0082.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_11_19_ 19.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_11_19_ 93.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_11_19_ 169.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_11_19_ 243.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_11_19_ 264.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_12_06_ 47.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_12_06_ 168.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_12_08_FCEO_ 108.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_12_08_FCEO_ 205.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_12_08_FCEO_ 235.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/23_12_08_FCEO_ 282.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/24_01_02_Hewan 35.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/24_03_13_AMIT & UDIT_336.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/24_03_31_Deepak K_077.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/29_10_23_ 284 1.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/29_10_23_ 317.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/Amit Gupta_043.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/BURGEON LAW-706-Edit-min.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/BURGEON LAW-820-Edit-min.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/Rohan_025.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/Rohan_080.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/Web_Deeptha_391 1.jpg",
            type: "branding"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/branding/Web-Vishal356.jpg",
            type: "branding"
          },
          
        ],
        headshots: [
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/445.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/1_11_23_ 244 1.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/13_09_23_ 16.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/19_09_23_48.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/19_09_23_62.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/23_12_08_Milanka_ 31.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/23_12_08_Sunil_ 28.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/23_12_25_Sanjay 80 1.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/24_02_17_Vasvi 32.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/24_02_24_Vibhuti Hooda 51.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/24_03_13_AMIT & UDIT_100 1.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/24_03_26_Sarfraz_022.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/25_09_23_ 27.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/29_10_23_ 54.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/29_10_23_ 230.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Aasifa_18-Edit-min.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Headshot_Nov-132-Edit-min.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Shailendra_1063-Edit-min.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Siddharth_1081-Edit-min.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Sreekala_8855-Social Media.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Tom Headshot Jan 2023-267-Edit-min.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Web_Gurdish-444.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Web_Sanjay Vaid 0593.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/Website July 0170 1.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/1-shweta-chauhan-human-resource-specialist grey.jpg",
            type: "headshot"
          },
          {
            name: "Abhinandan",
            occupation: "",
            url: "/portfolio/headshots/Abhinandan_1101-Edit-min.jpg",
            type: "headshot"
          },
          {
            name: "Vijay Jayswal",
            occupation: "Cloud Consultant",
            url: "/portfolio/headshots/19-Vijay-jayswal-cloud-consultant.jpg",
            type: "headshot"
          },
          {
            name: "Jayshree Dugar",
            occupation: "Legal Associate",
            url: "/portfolio/headshots/14-jayshree-dugar-legal-associate.jpg",
            type: "headshot"
          },
          {
            name: " ",
            occupation: "",
            url: "/portfolio/headshots/Anchal S_2022_18-min.jpg",
            type: "headshot"
          },
          {
            name: " ",
            occupation: "",
            url: "/portfolio/headshots/Jasmine_C_02-min.jpg",
            type: "headshot"
          },
          {
            name: " ",
            occupation: "",
            url: "/portfolio/headshots/Ketaki_038_Web.jpg",
            type: "headshot"
          },
          {
            name: "Brian Ford",
            occupation: "Director",
            url: "/portfolio/headshots/2-brian-ford-director-1.jpg",
            type: "headshot"
          },
          {
            name: "Dr Nirupama Parwanda",
            occupation: "Dermatologist Zolie Skin Clinic",
            url: "/portfolio/headshots/4-dr-nirupama-parwanda-dermatologist-zolie-skin-clinic.jpg",
            type: "headshot"
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portfolio/headshots/12-raina-gupta-model.-2.jpg",
            type: "headshot"
          },
          {
            name: "Amit Luthra",
            occupation: "Photographer/Artist",
            url: "/portfolio/headshots/13-amit-luthra-photographer-artist-2.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/BRI_5196.jpg",
            type: "headshot"
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portfolio/headshots/16-raina-gupta-model-3.jpg",
            type: "headshot"
          },
          {
            name: "Brian Ford",
            occupation: "Director",
            url: "/portfolio/headshots/19-brian-ford-film-maker-2.jpg",
            type: "headshot"
          },
          {
            name: " ",
            occupation: "",
            url: "/portfolio/headshots/Omnivore_060-Edit_v2.jpg",
            type: "headshot"
          },
          {
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/portfolio/headshots/23-ria-dixit-personal-stylist-3.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/DSC_9873.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/DSC_9879.jpg",
            type: "headshot"
          },
          {
            name: "",
            occupation: "",
            url: "/portfolio/headshots/DSC_9884.jpg",
            type: "headshot"
          },

        ],
        selectedImageIndex: null,
        modalOpen: false,

      }
    },
    methods: {
      expand(index) {
        if(window.innerWidth > 700) {
          this.selectedImageIndex = index
          this.modalOpen = true          
        }

      },

      closePic() {
        this.modalOpen = false
      },
    },
    computed: {
        selectedImage() {
          if (this.headshotsSelected) {
            return this.headshots[this.selectedImageIndex]
          } else if (this.brandingSelected) {
            return this.branding[this.selectedImageIndex]
          }

            
        }
    },
  }
</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

  .categories {
    margin: 0 auto;
    display: flex;
    width: 600px;
    /* border: 1px solid; */
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    font-family: 'dancing script', cursive;
    margin: 20px;
  }

  .text-selected {
    cursor: pointer;
    background: black;
    padding: 0 10px;
    color: #e5e5e5;
  }

  .entire-portfolio {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .img-container {
    margin:5px;
    overflow: hidden;
  }

  .image {
    height:300px;
    width: auto;
    transition: transform 300ms ease-in-out;
    display: block
  }

  .image:hover {
    transform: scale(1.1);
    filter: grayscale(1);
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    .categories {
      font-size: 30px;
      width: 400px;
    }
  }

  @media screen and (max-width: 750px) {
    .entire-portfolio{
      margin-top: 10px;
    }
    .image {
      width: 300px;
      height: auto;
    }
    .categories {
      margin-top: 70px;
      margin-bottom: 0px;
      font-size: 22px;
      width: 300px;
    }
  }

  .modal {
        display: none;
    }

    .modal.open {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 210px;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.5);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .selected-image {
        user-select: none;
        max-width: 100%;
        max-height: 80vh;
    }

    @media screen and (max-width: 700px) {
        .modal.open { 
            left: 0;
            margin-top: 30px;
        }
        .selected-image {
            max-width: 100%;
        }
    }





  /* .entire-page {
    margin-top: 30px;
    overflow: hidden;
  }

  Carousel {
    border: 1px solid black;
  }

  .category-title {
    margin-left: 20px;
    font-family: 'dancing script', cursive;
    font-size: 25px;
  } */

  /* @media screen and (max-width: 700px) {
    .category-title {
      font-size: 20px;
    }

    .entire-page {
      margin-top: 60px;
    }
  } */

</style>