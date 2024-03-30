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
                // {
                //     quote: "Basundhara is an exceptionally skilled photographer. I've had the pleasure of engaging her for both our family and professional shoots and she always captures some really genuine moments. She is a perfectionist and is extremely meticulous in her work, which reflects in every photo she clicks! I would highly recommend her services to anyone.",
                //     name: "Ritesh Kumar",
                //     occupation: "Partner at KRN Law Offices LLP",
                //     picture: "/testimonial-pics/ritesh-kumar.jpg"
                // },
                // {
                //     quote: "If you want your photos to breathe life, energy, and a whole lot of positivity - Basundhara is your go-to person. Extremely energetic and a thorough professional, she is really passionate about her work. The best thing I loved about her working style is her quick understanding of my hesitation to get clicked and still bringing out my most authentic version through engaging conversations. She comes armed with patience and a great eye for detail, given her experiences of having traveled and worked across the globe. I can vouch for anyone's LinkedIn (and digital) portfolio to be in the best hands once they engage with Basundhara. Cheers to the best photographer I know!",
                //     name: "Akshay Bachhawat",
                //     occupation: "EY Due Diligence | Tedx Speaker | Founder - Vichiti | LinkedIn Creator | GPODS Scholar | Young Professional in Foreign Policy | Expert Member - World Innovation Alliance",
                //     picture: "/testimonial-pics/akshay-min.jpg"
                // },
                // {
                //     quote: "Basundhara did some branding pictures for me. I love how detail oriented she is; exactly the kind of people I absolutely enjoy working with 😍💖",
                //     name: "Ria Dixit",
                //     occupation: "Personal Stylist",
                //     picture: "/testimonial-pics/ria-dixit.jpg"
                // },
                // {
                //     quote: "Basundhara is a great professional to work with. She is well planned in her approach, she briefed me on various aspects of the photo-shoot to prepare in advance, during the shoot she talked me out and made me comfortable in front of the camera. The quality of her work is excellent.It was a pleasure working with Basundhara and I would highly recommend her for Professional Headshots and Portraits.",
                //     name: "Varun Chauhan",
                //     occupation: "Finance Transformation Leader at Macquarie Group",
                //     picture: "/testimonial-pics/Varun_Min_03-min.jpg"
                // },
                // {
                //     quote: "I've worked with multiple photographers over the past 7+ years of my professional life. Basundhara is most definitely among the best photographers I've ever worked with. Period. I'm willing to bet my bottom dollar you'd be hard-pressed to find a sharper, more generous & more capable photographer for your professional headshots.",
                //     name: "Saikat Pyne",
                //     occupation: "Digital Communications Specialist | Host @ You Inc. Podcast | IMPACT 30 Under 30 ",
                //     picture: "/testimonial-pics/Saikat_Pyne_008_Grey-V2-min-min.jpg"
                // },
                {
                    quote: "Professional and Completely puts you to ease. You can see my profile picture to gauge how fabulous Basundhara is. Her work speaks for itself. She is amazing. I recommend her for portraits for sure.",
                    name: "Ketaki Mehta",
                    occupation: "Personal Branding Consultant, The NorthStar Finder Training & Consulting",
                    picture: "/testimonial-pics/Ketaki_026-Web-min.jpg"
                },
                // {
                //     quote: "If you are an active working professional and still using a passport size photo or a casual photo or a selfie in your resume, your website or profile picture on a professional network like LinkedIn, then I highly recommend investing in professional headshots for enhanced profile branding. I thrive on compassion, openness and positive energy that has been beautifully captured in this recent headshot by Basundhara B.",
                //     name: "Gaurav Bhatia",
                //     occupation: "Talent Acquisition (TA) Specialist,Head Hunter & Account Manager-Senior Manager Grade",
                //     picture: "/testimonial-pics/Shalini_Gaurav_38_Web-min.jpg"
                // },
                // {
                //     quote: "Basundhara is an amazing photographer and produces world class results. Her unique way of getting to know a client before the photoshoot and then not compromising on the day of the shoot is very comforting and also results in amazing quality. Basundhara is destined for greater things in life. Pride of India",
                //     name: "Syed Shaheen Chishti",
                //     occupation: "Author and Chairman of Chishti Industries",
                //     picture: "/testimonial-pics/shaheen-chishti.jpg"
                // },
                // {
                //     quote: "Basundhara did an amazing work and was very patient throughout. She understands the client's requirements properly and leaves no stone unturned to meet the expectations. Keep up the good work and contribute towards enhancing profile in your own way!!",
                //     name: "Pallav Pandey",
                //     occupation: "Principal Associate at Chambers of Jaitley & Bakhshi",
                //     picture: "/testimonial-pics/pallav-linkedin.jpg"
                // },
                // {
                //     quote: "I am so glad I got the chance to get headshots clicked by Basundhara. For someone who is camera-shy like me, it was a fun and effortless experience. Basundhara helped me relax in front of the camera while she captured some really great shots and smiles.",
                //     name: "Shalini Sinha",
                //     occupation: "Commercial Food Photographer ⏐ Food Stylist",
                //     picture: "/testimonial-pics/Shalini_Gaurav_13_bnw_Web-min.jpg"
                // },
                {
                    quote: "Basundhara was instrumental during the launch of Vpop. The inaugural product line was shot by her and as I was just starting out myself, she was patient, organised and prepared everytime she came for the shoot to put me at ease. She was open to discussions, brainstorming photo angles etc and didn't worry about the time invested as her focus was only a great outcome. Her level of professionalism and attention to detail gave me the confidence in the quality of the end result. She went above and beyond to make the final pics just perfect and the ones that were not, she came back to a repeat shoot!!! I would highly recommend her!",
                    name: "Varuna Chand",
                    occupation: "Founder and CEO at VPOP",
                    picture: "/testimonial-pics/vpop-logo.jpg"
                },
                {
                    quote: "I wholeheartedly recommend Basundhara to anyone seeking professional photography services, particularly for LinkedIn photoshoots. She recently conducted my shoot, displaying exceptional professionalism and attention to detail. She took the time to understand my vision, offered valuable suggestions, and created a comfortable atmosphere throughout the session. \n \n One of the qualities that impressed me most about Basundhara was her humility and genuine interest in ensuring client satisfaction. \n \n Basundhara demonstrated a remarkable level of skill and creativity in capturing the essence of my professional identity. The final photographs exceeded my expectations. I am confident that she will continue to excel in her craft and exceed the expectations of her clients.",
                    name: "Vibhuti Hooda",
                    occupation: "Senior Manager - HCM | HR Digital Transformation I Vertiv",
                    picture: "/testimonial-pics/Varun_Min_03-min.jpg"
                },
                {
                    quote: "It was great working with Basundhara! What I liked best is that she tries to understand you and your personality and manifests it to reflect in the headshots and photographs taken. You're in for a photograph and an end-to-end experience that she makes seamless and so comfortable. Highly recommended!",
                    name: "Nandita Nawalakha",
                    occupation: "Director - Indirect Tax at Price Waterhouse & Co LLP",
                    picture: "/testimonial-pics/Nandita Lakhanwala_ 33 1-min.jpg"
                },                
                {
                    quote: "I had the pleasure of working with Basundhara for my professional headshot, and I couldn't be happier with the results. Her skill behind the lens captured exactly what I was looking for—a polished and professional image for my LinkedIn profile. Basundhara is not only talented but also a pleasure to work with. I highly recommend her services!",
                    name: "Vivek Das",
                    occupation: "Director, Product Management @SAP | ISB",
                    picture: "/testimonial-pics/Vivek Das_ 87 1-min.jpg"
                },                
                {
                    quote: "I wholeheartedly recommend Basundhara B for your next headshot photoshoot. Her professionalism and keen eye for detail truly sets her apart in portrait photography. Working with her was an absolute breeze – as she effortlessly glided through the entire process, making it comfortable and enjoyable. Moreover, her friendly nature made the experience not only productive but also genuinely enjoyable. Basundhara B has an exceptional talent for capturing the essence of her subjects, and I couldn't be happier with the results. If you're looking for a skilled and personable photographer for your headshots, look no further – She is absolutely amongst the best in the business.",
                    name: "Sanjay Roye",
                    occupation: "Rear Admiral | Independent Director | Defence & Maritime | Pioneer Nuclear Submariner",
                    picture: "/testimonial-pics/Sanjay Roye_ 16-min.jpg"
                },                
                {
                    quote: "Recently, I had my headshot taken by Basundhara. I needed an updated profile picture for my social media accounts to portray the best version of myself. The experience of getting my picture taken by Basundhara was truly exceptional, and the resulting profile picture turned out to be wonderful. Basundhara has a unique approach to capturing the perfect pose and picture from her clients. She is well-prepared and organized before the shoot, putting in a lot of effort to ensure that the final result is just right. The price is definitely worth it, and it was truly a pleasure to meet and work with such a warm and friendly personality like Basundhara.",
                    name: "Sanjay vaid",
                    occupation: "Consultant, Auditor, Facilitator, Author & Speaker |Cybersecurity, AI & Digital Transformation Expert ",
                    picture: "/testimonial-pics/Sanjay Vaid 80 1-min.jpg"
                },                
                {
                    quote: "I'd highly recommend Basundhara to anyone who is looking to create an impactful professional profile. She is a thorough professional and extremely patient - she made me comfortable during the shoot and I especially appreciated the time she spent on different angles until I was happy with my headshot.",
                    name: "Janhavi Malhotra",
                    occupation: "Senior Manager HR at Tata 1mg",
                    picture: "/testimonial-pics/Jhanvi 2-min.jpg"
                },                
                {
                    quote: "I highly recommend Ms. Basundara for her outstanding photos in Headshots and Personal Branding. As a member of the Sikh community, I was initially hesitant about getting a headshot taken with my turban. However, Ms. Basundara put me at ease with her friendly and approachable manner. The result was nothing short of fabulous and was appreciated by everyone who saw it. \n \n Ms. Basundara has a unique talent for capturing the essence of her clients' personal brand and delivering headshots that truly stand out. I cannot recommend her enough for anyone seeking a standout headshot or personal branding portrait. Her work is truly exceptional and will exceed your expectations.",
                    name: "Gurdiish Singh Sabharwal ",
                    occupation: "Regional Director Engineering & Technical Services @The Oberoi Group",
                    picture: "/testimonial-pics/Gurdish-444-min.jpg"
                },                
                {
                    quote: "If pictures speak 1000 words, Basundhara's pictures make that 10000! Basundhara and I collaborated as I looked to get new headshots done. As someone who believes in authenticity, I am a stickler for having my truest form on or off camera. Basundhara encouraged me to be just that as her clicks worked magic. Right from the planning of the session, the discussions, and the actual clicks to seeing the final product - Basundhara exuded professionalism: Prompt, Clear, and focused customer satisfaction. \n \n As Senior leaders, one tends to often overlook the power of connecting via a real picture of ourselves. Basundhara fills that gap beautifully as she understands the depth of the art beyond its technicality. I must say, I waited for a good chunk of time to get my headshot clicked since I looked forward to getting it done by her, and yes - It was worth it!",
                    name: "Sreekala Sunderrajan",
                    occupation: "VP - Programmes / Operations | Creator - Shakti Leadership Academy | Women Influencer Awardee '21",
                    picture: "/testimonial-pics/Sreekala_8838-min.jpg"
                },                
                {
                    quote: "Basundhara did an amazing job with my headshots. I needed them for a publication initially but ended up using them everywhere :) across social media. They were that good. She is professional, focused, and capable. A rare combination. If you or anyone else wants to get their whole top team clicked, I'd recommend her!",
                    name: "Aabhinandan Chatterjee",
                    occupation: "Independent Consultant COO at Multiple companies, Ex-CEO of Revolut",
                    picture: "/testimonial-pics/Abhinandan_1101-min.jpg"
                },                
                {
                    quote: "I found Basundhara's profile on Linkedin through a random Google search and I am so glad that I did! \n \n Right in our first call, she understood my requirements were and discussed the various ways we could achieve them. She came across as extremely passionate about her role, and her ideas were really innovative and she presented different options for me to choose from. \n \n Her approach was professional and systematic the entire time, right from planning the photoshoot to the final review. On the day of the photoshoot, she was already prepped before I reached the venue, and took the efforts to make me comfortable with the process. It was an incredible experience for me. The final shots delivered were of the highest quality. \n \n It was a pleasure working with Basundhara, and look forward to more such collaborations!",
                    name: "Rohan Bansal",
                    occupation: "Oxford MBA '24 | Climate and Sustainability | Strategy & Finance | Private Equity | Helping Impact-Driven Founders Build Solid Fundraising Strategies",
                    picture: "/testimonial-pics/Rohan_025-min.jpg"
                },                
                {
                    quote: "We did a photo shoot with Basundhara and it was really memorable. What made it really memorable was her keen intent to understand the personality and her photographs capture the real personality and that is what makes her stand apart! \n \n I strongly recommend Basundhara as her camera can capture more than what's visible!",
                    name: "Jasmine Suri",
                    occupation: "Founder Jasmine's Playadiem, PCC Life and Leadership Coach",
                    picture: "/testimonial-pics/Jasmine_02-min.jpg"
                },                
                {
                    quote: "I came across Basundhara's profile quite serendipitously on LinkedIn and we were in business within the week! She is clearly passionate about her work and despite her years of experience I found her to be genuinely open to constructive feedback and trying new things. She exudes a great deal of patience and warmth while behind the camera which helps nervous subjects feel more at ease, a key component of her beautiful shots. \n \n While working with me she had extremely limited space and various other constraints. However, there was never any fuss or complaints about the same. She prepped meticulously, adjusted wherever needed, and in the end, the results satisfied my whole team which is no mean feat! Even aside from her considerable photography skills, she is friendly, easy to talk to, and very transparent about her pricing. It was a pleasure working with her and I look forward to more collaborations in the future.",
                    name: "Saborni Poddar",
                    occupation: "Head of Communication, Omnivore",
                    picture: "/testimonial-pics/Saborni_004-min.jpg"
                },

            ]
        }
    }
  };
</script>

<style scoped>

.main-container {
    white-space: pre-line;
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