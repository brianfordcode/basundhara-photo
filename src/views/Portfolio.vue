<template>

  <div class="entire-portfolio">

    <div
      v-for="(pic, index) in pictures"
      :key="pic"
      class="img-container"
    >
      <img
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

</template>

<script>

  // import Carousel from '../components/Carousel'

  export default {
    // components: {
    //   Carousel
    // },

    data() {
      return {
        pictures: [
          {
            name: "",
            occupation: "",
            url: "/portraits/1-shweta-chauhan-human-resource-specialist grey.jpg",
          },
          {
            name: "Abhinandan",
            occupation: "",
            url: "/portraits/Abhinandan_1101-Edit-min.jpg",
          },
          {
            name: "Shivani Khullar",
            occupation: "Analyst",
            url: "/portraits/11-shivani-khullar-analyst.jpg",
          },
          {
            name: "Shaheen Chishti",
            occupation: "Author",
            url: "/portraits/9-shaheen-chishti-author.jpg",
          },
          {
            name: "Savita Kumari",
            occupation: "Professor",
            url: "/portraits/10-savita-kumari-professor.jpg",
          },
          {
            name: "Vijay Jayswal",
            occupation: "Cloud Consultant",
            url: "/portraits/19-Vijay-jayswal-cloud-consultant.jpg",
          },
          {
            name: "Jayshree Dugar",
            occupation: "Legal Associate",
            url: "/portraits/14-jayshree-dugar-legal-associate.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_9891.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/Amit Bhagria_043-Social media.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/Devna_9892-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Anchal S_2022_18-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Jasmine_C_02-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Ketaki_038_Web.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Pratiyush_04-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Omnivore_006.jpg",
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portraits/1-raina-gupta-model-1.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Kabeir_9039-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Pragya_8968_Light_High res-Web.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Priyal_8742_Grey-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Sanjay_1131-Edit-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Shailendra_1063-Edit-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Siddharth_1081-Edit-min.jpg",
          },
          {
            name: "Brian Ford",
            occupation: "Director",
            url: "/portraits/2-brian-ford-director-1.jpg",
          },
          {
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/portraits/3-ria-dixit-personal-stylist.jpg",
          },
          {
            name: "Dr Nirupama Parwanda",
            occupation: "Dermatologist Zolie Skin Clinic",
            url: "/portraits/4-dr-nirupama-parwanda-dermatologist-zolie-skin-clinic.jpg",
          },
          {
            name: "Shaheen Chishti",
            occupation: "Author",
            url: "/portraits/8-shaheen-chishti-founder-1.jpg",
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portraits/12-raina-gupta-model.-2.jpg",
          },
          {
            name: "Amit Luthra",
            occupation: "Photographer/Artist",
            url: "/portraits/13-amit-luthra-photographer-artist-2.jpg",
          },
          {
            name: "Priyal Keni",
            occupation: "International Rifle Shooter",
            url: "/portraits/15-priyal-keni-international-rifle-shooter-1.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/BRI_5196.jpg",
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portraits/16-raina-gupta-model-3.jpg",
          },
          {
            name: "Brian Ford",
            occupation: "Director",
            url: "/portraits/19-brian-ford-film-maker-2.jpg",
          },
          {
            name: "Savita",
            occupation: "Professor",
            url: "/portraits/21-Savita_BRI_3761-Social Media.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/Anchal S_2022_55_H-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/portraits/Omnivore_060-Edit_v2.jpg",
          },
          {
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/portraits/23-ria-dixit-personal-stylist-3.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/5b_Purple_Casual_0004.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/BRI_4012-Large.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/BRI_6112.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_7604_S.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_9834.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_9873.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_9879.jpg",
          },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_9884.jpg",
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
            return this.pictures[this.selectedImageIndex]
        }
    },
  }
</script>

<style scoped>

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

  @media screen and (max-width: 700px) {
    .entire-portfolio{
      margin-top: 60px;
    }
    .image {
      width: 300px;
      height: auto;
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