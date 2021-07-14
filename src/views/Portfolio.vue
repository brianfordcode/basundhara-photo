<template>

  <div class="entire-page">

    <div>
      <p class="category-title">Portraits</p>
      <Carousel :items="portraits" />

      <p class="category-title">Linkedin Headshots</p>
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
            name: "Shweta Chauhan",
            occupation: "Human Resource Officer",
            url: "/linkedIn-headshots-small/1-shweta-chauhan-human-resource-specialist.jpg",
          },
          {
            name: "Vandana",
            occupation: "Reception Manager Zolie Skin Clinic",
            url: "/linkedIn-headshots-small/2-vandana-reception-manager-zolie-skin-clinic.jpg",
          },
          {
            name: "Ritesh Kumar",
            occupation: "Legal Counsel",
            url: "/linkedIn-headshots-small/3-ritesh-kumar-legal-counsel.jpg",
          },
          {
            name: "Roma Priya",
            occupation: "Founder Burgeon Law",
            url: "/linkedIn-headshots-small/4-roma-priya-founder-burgeon-law.jpg",
          },
          {
            name: "Priyal Keni",
            occupation: "International Rifle Shooter",
            url: "/linkedIn-headshots-small/5-priyal-keni-international-rifle-shooter.jpg",
          },
          {
            name: "Rahul Rajput",
            occupation: "Pantry Manager Zolie Skin Clinic",
            url: "/linkedIn-headshots-small/6-rahul-rajput-pantry-manager-zolie-skin-clinic.jpg",
          },
          {
            name: "Francis Rebello",
            occupation: "Professor",
            url: "/linkedIn-headshots-small/7-francis-rebello-professor.jpg",
          },
          {
            name: "Brian Ford",
            occupation: "THE BEST FILM DIRECTOR EVER",
            url: "/linkedIn-headshots-small/8-brian-ford-director.jpg",
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
            name: "Shivani Khullar",
            occupation: "Analyst",
            url: "/linkedIn-headshots-small/11-shivani-khullar-analyst.jpg",
          },
          {
            name: "Dr. Nirupama Parwanda",
            occupation: "Dermatologist Zolie Skin Clinic",
            url: "/linkedIn-headshots-small/12-dr-nirupama-parwanda-dermatologist-zolie-skin-clinic.jpg",
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/linkedIn-headshots-small/13-raina-gupta-model.jpg",
          },
          {
            name: "Jayshree Dugar",
            occupation: "Legal Associate",
            url: "/linkedIn-headshots-small/14-jayshree-dugar-legal-associate.jpg",
          },
          {
            name: "",
            occupation: "Cruise Ship Portrait",
            url: "/linkedIn-headshots-small/15-Ship-portrait.jpg",
          },
          {
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/linkedIn-headshots-small/16-ria-dixit-personal-stylist.jpg",
          },
          {
            name: "Sapna",
            occupation: "Skin Therapist Zolie Skin Clinic",
            url: "/linkedIn-headshots-small/17-sapna-skin-therapist-zolie-skin-clinic.jpg",
          },
          {
            name: "Shruti",
            occupation: "Artist",
            url: "/linkedIn-headshots-small/18-Shrut-artist.jpg",
          },
          {
            name: "Vijay Jayswal",
            occupation: "Cloud Consultant",
            url: "/linkedIn-headshots-small/19-Vijay-jayswal-cloud-consultant.jpg",
          },
        ],
        portraits: [
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portraits/1-raina-gupta-model-1.jpg",
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
            name: "Chandita Barman",
            occupation: "Legal Advisor",
            url: "/portraits/5-chandita-barman-legal-advisor.jpg",
          },
          {
            name: "Amit Luthra",
            occupation: "Photographer/Artist",
            url: "/portraits/6-amit-luthra-photographer-artist-1.jpg",
          },
          {
            name: "Jayshree Dugar",
            occupation: "Legal Associate",
            url: "/portraits/7-jayshree-dugar-legal-associate.jpg",
          },
          {
            name: "Shaheen Chishti",
            occupation: "Author",
            url: "/portraits/8-shaheen-chishti-founder-1.jpg",
          },
          {
            name: "Brian Ford",
            occupation: "Director",
            url: "/portraits/9-brian-ford-director.jpg",
          },
          {
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/portraits/9-ria-dixit-personal-stylist-1.jpg",
          },
          {
            name: "Priyal Keni",
            occupation: "International Rifle Shooter",
            url: "/portraits/10-priyal-keni-international-rifle-shooter-3.jpg",
          },
          {
            name: "Roma Priya",
            occupation: "Founder Burgeon Law",
            url: "/portraits/11-roma-priya-founder-burgeon-law-2.jpg",
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
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/portraits/14-ria-dixit-personal-stylist-2.jpg",
          },
          {
            name: "Priyal Keni",
            occupation: "International Rifle Shooter",
            url: "/portraits/15-priyal-keni-international-rifle-shooter-1.jpg",
          },
          {
            name: "Raina Gupta",
            occupation: "Model",
            url: "/portraits/16-raina-gupta-model-3.jpg",
          },
          {
            name: "Deepak Menon",
            occupation: "Partner JP Kapur & Uberai Chartered Accountants",
            url: "/portraits/17-deepak-menon-partner-JP-kapur-&-uberai-chartered-accountants.jpg",
          },
          {
            name: "Priyal Keni",
            occupation: "International Rifle Shooter",
            url: "/portraits/18-priyal-keni-international-rifle-shooter-2.jpg",
          },
          {
            name: "Brian Ford",
            occupation: "Director",
            url: "/portraits/19-brian-ford-film-maker-2.jpg",
          },
          {
            name: "Roma Priya",
            occupation: "Founder Burgeon Law",
            url: "/portraits/20-roma-priya-founder-burgeon-law-1.jpg",
          },
          {
            name: "Savita",
            occupation: "Professor",
            url: "/portraits/21-Savita_BRI_3761-Social Media.jpg",
          },
          {
            name: "Shaheen Chisti",
            occupation: "Author",
            url: "/portraits/22-shaheen-chishti-founder-2.jpg",
          },
          {
            name: "Ria Dixit",
            occupation: "Personal Stylist",
            url: "/portraits/23-ria-dixit-personal-stylist-3.jpg",
          },
        ]
      }
    }
  }
</script>

<style scoped>

  .entire-page {
    margin-top: 30px;
    overflow: hidden;
  }

  .category-title {
    margin-left: 20px;
    font-family: 'dancing script', cursive;
    font-size: 25px;
  }

  @media screen and (max-width: 700px) {
    .entire-page {
      margin-top: 60px;
    }
  }

</style>