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
                    quote: "I have shot with Basundhara for a couple of assignments. Working with Basundhara was extremely effortless and comfortable.  Her passion for photography clearly reflects in her work. She is extremely committed to ensuring that she tries to get the best version of you captured in the frame. Her professionalism and disciplined work ethic add more value to her flawless photography skills. I can definitely vouch for her bespoke photography skills! Definitely recommend her to anyone planning to get a professional headshot clicked. ",
                    name: "Priyal Keni",
                    occupation: "Deloitte Consulting | McKinsey Next Gen. Women Leader | 2x TEDx Speaker | Chartered Accountant | CFA Level 2 Candidate | International Rifle Shooter | GGI Scholar'21",
                    picture: "/testimonial-pics/Priyal_8742_Grey-min-min.jpg"
                },
                {
                    quote: "I had a great experience working with Basundhara in my Photo session. She has a real passion for photography - throughout the session, she was creative, patient, and flexible with different spots and locations to get the best shots. She is also a true professional - She was readily available for the shoot at short notice, actively made suggestions in selecting the photos, and delivered within a day. I am happy that she made my headshots stand out. I would highly recommend her and would like to work with her in the future again.",
                    name: "Anchal Srivastava",
                    occupation: "Managing Partner and Project Management Consultant at Accolade One Construction LLP",
                    picture: "/testimonial-pics/Anchal S_2022_18_LI-min-min.jpg"
                },
                {
                    quote: "Basundhara is an exceptionally skilled photographer. I've had the pleasure of engaging her for both our family and professional shoots and she always captures some really genuine moments. She is a perfectionist and is extremely meticulous in her work, which reflects in every photo she clicks! I would highly recommend her services to anyone.",
                    name: "Ritesh Kumar",
                    occupation: "Partner at KRN Law Offices LLP",
                    picture: "/testimonial-pics/ritesh-kumar.jpg"
                },
                {
                    quote: "If you want your photos to breathe life, energy, and a whole lot of positivity - Basundhara is your go-to person. Extremely energetic and a thorough professional, she is really passionate about her work. The best thing I loved about her working style is her quick understanding of my hesitation to get clicked and still bringing out my most authentic version through engaging conversations. She comes armed with patience and a great eye for detail, given her experiences of having traveled and worked across the globe. I can vouch for anyone's LinkedIn (and digital) portfolio to be in the best hands once they engage with Basundhara. Cheers to the best photographer I know!",
                    name: "Akshay Bachhawat",
                    occupation: "EY Due Diligence | Tedx Speaker | Founder - Vichiti | LinkedIn Creator | GPODS Scholar | Young Professional in Foreign Policy | Expert Member - World Innovation Alliance",
                    picture: "/testimonial-pics/akshay-min.jpg"
                },
                {
                    quote: "Basundhara did some branding pictures for me. I love how detail oriented she is; exactly the kind of people I absolutely enjoy working with 😍💖",
                    name: "Ria Dixit",
                    occupation: "Personal Stylist",
                    picture: "/testimonial-pics/ria-dixit.jpg"
                },
                {
                    quote: "Basundhara is a great professional to work with. She is well planned in her approach, she briefed me on various aspects of the photo-shoot to prepare in advance, during the shoot she talked me out and made me comfortable in front of the camera. The quality of her work is excellent.It was a pleasure working with Basundhara and I would highly recommend her for Professional Headshots and Portraits.",
                    name: "Varun Chauhan",
                    occupation: "Finance Transformation Leader at Macquarie Group",
                    picture: "/testimonial-pics/Varun_Min_03-min.jpg"
                },
                {
                    quote: "I've worked with multiple photographers over the past 7+ years of my professional life. Basundhara is most definitely among the best photographers I've ever worked with. Period. I'm willing to bet my bottom dollar you'd be hard-pressed to find a sharper, more generous & more capable photographer for your professional headshots.",
                    name: "Saikat Pyne",
                    occupation: "Digital Communications Specialist | Host @ You Inc. Podcast | IMPACT 30 Under 30 ",
                    picture: "/testimonial-pics/Saikat_Pyne_008_Grey-V2-min-min.jpg"
                },
                {
                    quote: "Professional and Completely puts you to ease. You can see my profile picture to gauge how fabulous Basundhara is. Her work speaks for itself. She is amazing. I recommend her for portraits for sure.",
                    name: "Ketaki Mehta",
                    occupation: "Personal Branding Consultant, The NorthStar Finder Training & Consulting",
                    picture: "/testimonial-pics/Ketaki_026-Web-min.jpg"
                },
                {
                    quote: "If you are an active working professional and still using a passport size photo or a casual photo or a selfie in your resume, your website or profile picture on a professional network like LinkedIn, then I highly recommend investing in professional headshots for enhanced profile branding. I thrive on compassion, openness and positive energy that has been beautifully captured in this recent headshot by Basundhara B.",
                    name: "Gaurav Bhatia",
                    occupation: "Talent Acquisition (TA) Specialist,Head Hunter & Account Manager-Senior Manager Grade",
                    picture: "/testimonial-pics/Shalini_Gaurav_38_Web-min.jpg"
                },
                {
                    quote: "Basundhara is an amazing photographer and produces world class results. Her unique way of getting to know a client before the photoshoot and then not compromising on the day of the shoot is very comforting and also results in amazing quality. Basundhara is destined for greater things in life. Pride of India",
                    name: "Syed Shaheen Chishti",
                    occupation: "Author and Chairman of Chishti Industries",
                    picture: "/testimonial-pics/shaheen-chishti.jpg"
                },
                {
                    quote: "Basundhara did an amazing work and was very patient throughout. She understands the client's requirements properly and leaves no stone unturned to meet the expectations. Keep up the good work and contribute towards enhancing profile in your own way!!",
                    name: "Pallav Pandey",
                    occupation: "Principal Associate at Chambers of Jaitley & Bakhshi",
                    picture: "/testimonial-pics/pallav-linkedin.jpg"
                },
                {
                    quote: "I am so glad I got the chance to get headshots clicked by Basundhara. For someone who is camera-shy like me, it was a fun and effortless experience. Basundhara helped me relax in front of the camera while she captured some really great shots and smiles.",
                    name: "Shalini Sinha",
                    occupation: "Commercial Food Photographer ⏐ Food Stylist",
                    picture: "/testimonial-pics/Shalini_Gaurav_13_bnw_Web-min.jpg"
                },
                {
                    quote: "Basundhara was instrumental during the launch of Vpop. The inaugural product line was shot by her and as I was just starting out myself, she was patient, organised and prepared everytime she came for the shoot to put me at ease. She was open to discussions, brainstorming photo angles etc and didn't worry about the time invested as her focus was only a great outcome. Her level of professionalism and attention to detail gave me the confidence in the quality of the end result. She went above and beyond to make the final pics just perfect and the ones that were not, she came back to a repeat shoot!!! I would highly recommend her!",
                    name: "Varuna Chand",
                    occupation: "Founder and CEO at VPOP",
                    picture: "/testimonial-pics/vpop-logo.jpg"
                },

            ]
        }
    }
  };
</script>

<style scoped>

.main-container {
    margin: 0 auto;
}

    .testimonial-wrapper {
        height: auto;
        width: auto;
        max-width: 1000px;
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

    @media screen and (max-width: 940px) {
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