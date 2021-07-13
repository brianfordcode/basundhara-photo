<template>

  <div class="entire-page">

    <h1 class="title">Portfolio</h1>

    <!-- PORTRAITS -->

    <!-- MAIN VW PAGE PINK -->
    <div>
      <h1 class="category-title">Portraits</h1>
      <Carousel :items="portraits" />

      <h1 class="category-title">linkedin Headshots</h1>
      <Carousel :items="linkedinHeadshots" />
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

  methods: { }
}
</script>

<style scoped>

.entire-page {
  /* border: 1px solid pink; */
  overflow: hidden;
}

.title {
  text-align: center;
  margin-top: 30px;
  font-family: 'dancing script', cursive;
  font-size: 50px;
}

.category-title {
  margin-left: 30px;
  font-family: 'dancing script', cursive;
}


</style>