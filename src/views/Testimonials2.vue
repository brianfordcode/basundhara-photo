<template>
    <div class="main-container">
        <div class="testimonial-wrapper" v-for="testimonial in testimonials">

            <div class="details">
                <p class="quote">{{testimonial.quote}}</p>
                <div class="name-occ">
                    <p class="name">{{testimonial.name}}</p>
                    <p class="occupation">{{testimonial.occupation}}</p>                    
                </div>
            </div>
            
            <img v-if="testimonial.picture" :src="testimonial.picture" alt="testimonial">

        </div>
    </div>

</template>


<script>
  export default {
    data() {
        return {
            testimonials: [
                {
                    quote: "Working with Basundhara was extremely effortless and comfortable. We hadn't met before in person but her warm nature and dynamic personality helped us gel well in no time. Her passion for photography clearly reflects in her work. She is extremely committed towards ensuring that she tries to get the best version of you captured in the frame. Her professionalism and disciplined work ethic add more value to her flawless photography skills. I definitely look forward to shooting several more features with her in the future :)",
                    name: "Priyal Keni",
                    occupation: "Deloitte Consulting | McKinsey Next Gen. Women Leader | 2x TEDx Speaker | Chartered Accountant | CFA Level 2 Candidate | International Rifle Shooter | GGI Scholar'21",
                    picture: "/testimonial-pics/priyal-keni.jpg"
                },
                {
                    quote: "Basundhara is an exceptionally skilled photographer. I've had the pleasure of engaging her for both our family and professional shoots and she always captures some really genuine moments. She is a perfectionist and is extremely meticulous in her work, which reflects in every photo she clicks! I would highly recommend her services to anyone.",
                    name: "Ritesh Kumar",
                    occupation: "Partner at KRN Law Offices LLP",
                    picture: "/testimonial-pics/ritesh-kumar.jpg"
                },
                {
                    quote: "Basundhara did some branding pictures for me. I love how detail oriented she is; exactly the kind of people I absolutely enjoy working with 😍💖",
                    name: "Ria Dixit",
                    occupation: "Personal Stylist",
                    picture: "/testimonial-pics/ria-dixit.jpg"
                },
                {
                    quote: "Basundhara makes the often nervy task of being clicked easy. If you have never been photographed professionally, she will make it easy, affordable and top class. We worked on creating a professional positioning for a client. Highly recommended.",
                    name: "Harshit Bhardwaj",
                    occupation: "Co-founder - James Hemingway Imprint Publishing",
                    picture: ""
                },
                {
                    quote: "Basundhara was instrumental during the launch of Vpop. The inaugural product line was shot by her and as I was just starting out myself, she was patient, organised and prepared everytime she came for the shoot to put me at ease. She was open to discussions, brainstorming photo angles etc and didn't worry about the time invested as her focus was only a great outcome. Her level of professionalism and attention to detail gave me the confidence in the quality of the end result. She went above and beyond to make the final pics just perfect and the ones that were not, she came back to a repeat shoot!!! I would highly recommend her!",
                    name: "Varuna Chand",
                    occupation: "Founder and CEO at VPOP",
                    picture: "/testimonial-pics/vpop-logo.jpg"
                },
                {
                    quote: "Basundhara did an amazing work and was very patient throughout. She understands the client's requirements properly and leaves no stone unturned to meet the expectations. Keep up the good work and contribute towards enhancing profile in your own way!!",
                    name: "Pallav Pandey",
                    occupation: "Principal Associate at Chambers of Jaitley & Bakhshi",
                    picture: "/testimonial-pics/pallav-linkedin.jpg"
                },
                {
                    quote: "Basundhara is an amazing photographer and produces world class results. Her unique way of getting to know a client before the photoshoot and then not compromising on the day of the shoot is very comforting and also results in amazing quality. Basundhara is destined for greater things in life. Pride of India",
                    name: "Syed Shaheen Chishti",
                    occupation: "Author and Chairman of Chishti Industries",
                    picture: "/testimonial-pics/shaheen-chishti.jpg"
                },
            ]
        }
    }
  };
</script>

<style scoped>

    .testimonial-wrapper {
        height: auto;
        width: auto;
        display: flex;
        margin: 12px;
        box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
        border-radius: 20px;
        overflow: hidden;
    }
    .details {
        padding: 20px 50px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .name-occ {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .name {
        font-family: 'dancing script', cursive;
        font-size: 30px;
        margin: 10px 0;
    }

    .quote {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .occupation {
        width: 80%;
        font-size: 12px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }

    img {
        width: auto;
        height: 300px;
    }

    @media screen and (max-width: 900px) {
        .testimonial-wrapper {
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 300px;
            height: auto;
            margin-bottom: 10px;
        }
    }
    

    @media screen and (max-width: 700px) {
        .main-container {
            margin-top: 50px;
        }
    }
</style>