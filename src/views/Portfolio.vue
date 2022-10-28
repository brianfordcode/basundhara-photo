<template>

  <!-- <div class="entire-page">

      <p class="category-title">Branding and Editorial Portraits</p>
      <Carousel :items="portraits" />

      <p class="category-title">LinkedIn and Corporate Headshots</p>
      <Carousel :items="linkedinHeadshots" />
      
  </div> -->

  <div
    style="display: flex;
    flex-wrap: wrap;
    justify-content: center;"
  >

    <div
      v-for="(pic, index) in pictures"
      :key="pic"
      class="img-container"
    >
      <img
        @click="expand(index)"
        :src="pic.url"
        alt="pic"
      />
    </div>

  </div>



</template>

<script>

  import Carousel from '../components/Carousel'

  export default {
    components: {
      Carousel
    },

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
            url: "/linkedIn-headshots-small/Abhinandan_1101-Edit-min.jpg",
          },
          // {
          //   name: "Shweta Chauhan",
          //   occupation: "Human Resource Officer",
          //   url: "/linkedIn-headshots-small/1-shweta-chauhan-human-resource-specialist.jpg",
          // },
          // {
          //   name: "Vandana",
          //   occupation: "Reception Manager Zolie Skin Clinic",
          //   url: "/linkedIn-headshots-small/2-vandana-reception-manager-zolie-skin-clinic.jpg",
          // },
          {
            name: "Rahul Rajput",
            occupation: "Pantry Manager Zolie Skin Clinic",
            url: "/linkedIn-headshots-small/6-rahul-rajput-pantry-manager-zolie-skin-clinic.jpg",
          },
          // {
          //   name: "Francis Rebello",
          //   occupation: "Professor",
          //   url: "/linkedIn-headshots-small/7-francis-rebello-professor.jpg",
          // },
          {
            name: "Shivani Khullar",
            occupation: "Analyst",
            url: "/linkedIn-headshots-small/11-shivani-khullar-analyst.jpg",
          },
          {
            name: "Shaheen Chishti",
            occupation: "Author",
            url: "/linkedIn-headshots-small/9-shaheen-chishti-author.jpg",
          },
          {
            name: "Savita Kumari",
            occupation: "Professor",
            url: "/linkedIn-headshots-small/10-savita-kumari-professor.jpg",
          },
          {
            name: "Vijay Jayswal",
            occupation: "Cloud Consultant",
            url: "/linkedIn-headshots-small/19-Vijay-jayswal-cloud-consultant.jpg",
          },
          {
            name: "Jayshree Dugar",
            occupation: "Legal Associate",
            url: "/linkedIn-headshots-small/14-jayshree-dugar-legal-associate.jpg",
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
            url: "/linkedIn-headshots-small/Kabeir_9039-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/linkedIn-headshots-small/Pragya_8968_Light_High res-Web.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/linkedIn-headshots-small/Priyal_8742_Grey-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/linkedIn-headshots-small/Sanjay_1131-Edit-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/linkedIn-headshots-small/Shailendra_1063-Edit-min.jpg",
          },
          {
            name: " ",
            occupation: "",
            url: "/linkedIn-headshots-small/Siddharth_1081-Edit-min.jpg",
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
          // {
          //   name: "Jayshree Dugar",
          //   occupation: "Legal Associate",
          //   url: "/portraits/7-jayshree-dugar-legal-associate.jpg",
          // },
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
          // {
          //   name: "Deepak Menon",
          //   occupation: "Partner JP Kapur & Uberai Chartered Accountants",
          //   url: "/portraits/17-deepak-menon-partner-JP-kapur-&-uberai-chartered-accountants.jpg",
          // },
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
            url: "/linkedIn-headshots-small/Omnivore_060-Edit_v2.jpg",
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
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_5094.jpg",
          // },

          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_5220.jpg",
          // },
          {
            name: "",
            occupation: "",
            url: "/portraits/BRI_6112.jpg",
          },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_6439.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_6646-Edit.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_6672.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_6698.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_6968.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/BRI_7512.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/DSC_7447.jpg",
          // },
          {
            name: "",
            occupation: "",
            url: "/portraits/DSC_7604_S.jpg",
          },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/DSC_9818.jpg",
          // },
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

          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/DSC_9938.tif",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/DSC_9961.tif",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/JAY_5980-Edit.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/NKN_5839.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/NKN_5875.jpg",
          // },
          // {
          //   name: "",
          //   occupation: "",
          //   url: "/portraits/NKN_5881.jpg",
          // },
        ],


        // linkedinHeadshots: [
        //   {
        //     name: "Abhinandan",
        //     occupation: "",
        //     url: "/linkedIn-headshots-small/Abhinandan_1101-Edit-min.jpg",
        //   },
        //   {
        //     name: "Shweta Chauhan",
        //     occupation: "Human Resource Officer",
        //     url: "/linkedIn-headshots-small/1-shweta-chauhan-human-resource-specialist.jpg",
        //   },
        //   {
        //     name: "Vandana",
        //     occupation: "Reception Manager Zolie Skin Clinic",
        //     url: "/linkedIn-headshots-small/2-vandana-reception-manager-zolie-skin-clinic.jpg",
        //   },
        //   {
        //     name: "Rahul Rajput",
        //     occupation: "Pantry Manager Zolie Skin Clinic",
        //     url: "/linkedIn-headshots-small/6-rahul-rajput-pantry-manager-zolie-skin-clinic.jpg",
        //   },
        //   {
        //     name: "Francis Rebello",
        //     occupation: "Professor",
        //     url: "/linkedIn-headshots-small/7-francis-rebello-professor.jpg",
        //   },
        //   {
        //     name: "Shaheen Chishti",
        //     occupation: "Author",
        //     url: "/linkedIn-headshots-small/9-shaheen-chishti-author.jpg",
        //   },
        //   {
        //     name: "Savita Kumari",
        //     occupation: "Professor",
        //     url: "/linkedIn-headshots-small/10-savita-kumari-professor.jpg",
        //   },
        //   {
        //     name: "Shivani Khullar",
        //     occupation: "Analyst",
        //     url: "/linkedIn-headshots-small/11-shivani-khullar-analyst.jpg",
        //   },
        //   {
        //     name: "Jayshree Dugar",
        //     occupation: "Legal Associate",
        //     url: "/linkedIn-headshots-small/14-jayshree-dugar-legal-associate.jpg",
        //   },
        //   {
        //     name: "Vijay Jayswal",
        //     occupation: "Cloud Consultant",
        //     url: "/linkedIn-headshots-small/19-Vijay-jayswal-cloud-consultant.jpg",
        //   },
        // ],
        // portraits: [
        // {
        //     name: "",
        //     occupation: "",
        //     url: "/portraits/Amit Bhagria_043-Social media.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Anchal S_2022_18-min.jpg",
        //   },
        //   {
        //     name: "",
        //     occupation: "",
        //     url: "/portraits/Devna_9892-min.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Jasmine_C_05-min.jpg",
        //   },
    
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Ketaki_038_Web.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Pratiyush_04-min.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Omnivore_006.jpg",
        //   },
        //   {
        //     name: "Raina Gupta",
        //     occupation: "Model",
        //     url: "/portraits/1-raina-gupta-model-1.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Kabeir_9039-min.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Omnivore_060-Edit_v2.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Pragya_8968_Light_High res-Web.jpg",
        //   },

        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Priyal_8742_Grey-min.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Sanjay_1131-Edit-min.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Shailendra_1063-Edit-min.jpg",
        //   },
        //   {
        //     name: " ",
        //     occupation: "",
        //     url: "/portraits/Siddharth_1081-Edit-min.jpg",
        //   },
        //   {
        //     name: "Brian Ford",
        //     occupation: "Director",
        //     url: "/portraits/2-brian-ford-director-1.jpg",
        //   },
        //   {
        //     name: "Ria Dixit",
        //     occupation: "Personal Stylist",
        //     url: "/portraits/3-ria-dixit-personal-stylist.jpg",
        //   },
        //   {
        //     name: "Dr Nirupama Parwanda",
        //     occupation: "Dermatologist Zolie Skin Clinic",
        //     url: "/portraits/4-dr-nirupama-parwanda-dermatologist-zolie-skin-clinic.jpg",
        //   },
        //   {
        //     name: "Jayshree Dugar",
        //     occupation: "Legal Associate",
        //     url: "/portraits/7-jayshree-dugar-legal-associate.jpg",
        //   },
        //   {
        //     name: "Shaheen Chishti",
        //     occupation: "Author",
        //     url: "/portraits/8-shaheen-chishti-founder-1.jpg",
        //   },
        //   {
        //     name: "Raina Gupta",
        //     occupation: "Model",
        //     url: "/portraits/12-raina-gupta-model.-2.jpg",
        //   },
        //   {
        //     name: "Amit Luthra",
        //     occupation: "Photographer/Artist",
        //     url: "/portraits/13-amit-luthra-photographer-artist-2.jpg",
        //   },
        //   {
        //     name: "Priyal Keni",
        //     occupation: "International Rifle Shooter",
        //     url: "/portraits/15-priyal-keni-international-rifle-shooter-1.jpg",
        //   },
        //   {
        //     name: "Raina Gupta",
        //     occupation: "Model",
        //     url: "/portraits/16-raina-gupta-model-3.jpg",
        //   },
        //   {
        //     name: "Deepak Menon",
        //     occupation: "Partner JP Kapur & Uberai Chartered Accountants",
        //     url: "/portraits/17-deepak-menon-partner-JP-kapur-&-uberai-chartered-accountants.jpg",
        //   },
        //   {
        //     name: "Brian Ford",
        //     occupation: "Director",
        //     url: "/portraits/19-brian-ford-film-maker-2.jpg",
        //   },
        //   {
        //     name: "Savita",
        //     occupation: "Professor",
        //     url: "/portraits/21-Savita_BRI_3761-Social Media.jpg",
        //   },
        //   {
        //     name: "Ria Dixit",
        //     occupation: "Personal Stylist",
        //     url: "/portraits/23-ria-dixit-personal-stylist-3.jpg",
        //   },
        //   {
        //     name: "",
        //     occupation: "",
        //     url: "/portraits/.jpg",
        //   },
        //   {
        //     name: "",
        //     occupation: "",
        //     url: "/portraits/.jpg",
        //   },
        // ],

      }
    },
    methods: {
      expand(index) {
        console.log(index)
        // to expand picture for viewing
      }
    }
  }
</script>

<style scoped>

  .entire-page {
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
  }

  .img-container {
    /* border: 1px solid; */
    margin:5px;
    overflow: hidden;
  }

  img {
    height:300px;
    width: auto;
    transition: transform 300ms ease-in-out;
    display: block

  }

  img:hover {
    transform: scale(1.1);
    filter: grayscale(1);
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    .category-title {
      font-size: 20px;
    }

    .entire-page {
      margin-top: 60px;
    }
  }

</style>