<template>
    
<div class="entire-page">
    
    <h1 class="title">Testimonials</h1>
    
    
    <div
        ref="mainContainer"
        class="main-container"
        @mousedown="startDrag"
        @mousemove="mouseMove"
    >
        
        <div
        ref="testimonialContainer"
        :class="{
            'testimonials-container': true,
            'not-dragging': !dragging
        }"
        :style="{
            transform: `translateX(${ position }px)`
        }"
        >
            <div
                v-for="testimonial in testimonials" class="testimonial"
                :key="testimonial"
            >
                <q class="quote">{{ testimonial.quote }}</q>
                <div class="image-name">
                    <img draggable="false" v-if="testimonial.picture" :src="testimonial.picture" :alt="testimonial.name">
                    <p class="name">{{ testimonial.name }}</p>
                    <p class="occupation">{{ testimonial.occupation }}</p>
                </div>
            </div> 
        </div>
            
    </div>
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
            startingX: 0,
            endingX: 0,
            position: 0,
            testimonials: [
                {
                    quote: "Basundhara is an amazing photographer and produces world class results. Her unique way of getting to know a client before the photoshoot and then not compromising on the day of the shoot is very comforting and also results in amazing quality. Basundhara is destined for greater things in life. Pride of India",
                    name: "Syed Shaheen Chishti",
                    occupation: "Author and Chairman of Chishti Industries",
                    picture: "/linkedIn-headshots-small/9-shaheen-chishti-author.jpg"
                },
                {
                    quote: "Basundhara makes the often nervy task of being clicked easy. If you have never been photographed professionally, she will make it easy, affordable and top class. Highly recommended.",
                    name: "Harshit Bhardwaj",
                    occupation: "Co-Founder - James Hemingway Imprint Publishing",
                    picture: ""
                },
                {
                    quote: "Basundhara was instrumental during the launch of Vpop. The inaugural product line was shot by her and as I was just starting out myself, she was patient, organised and prepared everytime she came for the shoot to put me at ease. She was open to discussions, brainstorming photo angles etc and didn't worry about the time invested as her focus was only a great outcome. Her level of professionalism and attention to detail gave me the confidence in the quality of the end result. She went above and beyond to make the final pics just perfect and the ones that were not, she came back to a repeat shoot!!! I would highly recommend her!",
                    name: "Varuna Chand",
                    occupation: "Founder and CEO at VPOP",
                    picture: ""
                },
                {
                    quote: "Basundhara is an exceptionally skilled photographer. I've had the pleasure of engaging her for both our family and professional shoots and she always captures some really genuine moments. She is a perfectionist and is extremely meticulous in her work, which reflects in every photo she clicks! I would highly recommend her services to anyone.",
                    name: "Ritesh Kumar",
                    occupation: "Partner at KRN Law Offices LLP",
                    picture: "/linkedIn-headshots-small/3-ritesh-kumar-legal-counsel.jpg"
                },
                {
                    quote: "Working with Basundhara was extremely effortless and comfortable. We hadn't met before in person but her warm nature and dynamic personality helped us gel well in no time. Her passion for photography clearly reflects in her work. She is extremely committed towards ensuring that she tries to get the best version of you captured in the frame. Her professionalism and disciplined work ethic add more value to her flawless photography skills. I definitely look forward to shooting several more features with her in the future :)",
                    name: "Priyal Keni",
                    occupation: "Deloitte Consulting | McKinsey Next Gen. Women Leader | 2x TEDx Speaker | Chartered Accountant | CFA Level 2 Candidate | International Rifle Shooter | GGI Scholar'21",
                    picture: "/linkedIn-headshots-small/5-priyal-keni-international-rifle-shooter.jpg"
                },
                {
                    quote: "Basundhara did some branding pictures for me. I love how detail oriented she is; exactly the kind of people I absolutely enjoy working with 😍💖",
                    name: "Ria Dixit",
                    occupation: "Personal Stylist",
                    picture: "/linkedIn-headshots-small/16-ria-dixit-personal-stylist.jpg"
                },

            ]
        }
    },

    methods: {

        startDrag(e) {
            this.dragging = true
            this.lastX = e.clientX
        },

        mouseMove(e) {
            const changeInX = e.clientX - this.lastX

            if (this.dragging) {
                this.position += changeInX
                this.lastX = e.clientX
            }
        },

        endDrag() {
            this.dragging = false

            if (this.position > 0) this.position = 0
            else {
                const tWidth = this.$refs.testimonialContainer.offsetWidth
                const mWidth = this.$refs.mainContainer.offsetWidth
                // clamp new position so that there is no whitespace to the right
                this.position = Math.max(mWidth - tWidth, this.position)
            }
        }
    }
}

</script>

<style scoped>

.entire-page {
    overflow: hidden;
    /* border: 1px solid green; */
}
.title {
    text-align: center;
    margin: 30px;
    font-family: 'dancing script', cursive;
    font-size: 50px;
}

.main-container {
    /* border: 1px solid pink; */
    overflow-x: scroll;
    height: min-content;
    /* width: 100vw; */
    user-select: none;
    position: relative;
    cursor: grab;
}

.main-container::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 700px) {
    .main-container {
        margin-top: 50px;
    }
}


.title {
    font-family: 'dancing script', cursive;
    margin-top: 20px;
    font-size: 50px;
    text-align: center;
    /* border: 1px solid green; */
}

.testimonials-container {
    /* border: 1px solid blue; */
    display: flex;
    width: min-content;
    /* overflow-x: scroll; */
    /* overflow-y: hidden; */
    position: relative;
    cursor: grab;
}

.testimonial {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: white;
    box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
    border-radius: 20px;
    width: 300px;
    height: 100%;
    min-width: 300px;
    max-width: 300px;
    padding: 20px;
    margin: 30px 20px;
    transition: .2s, fade-in-out;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    user-select: none;
}

.testimonial:hover {
    transform: scale(1.05);
    z-index: 5
}

.quote {
    line-height: 25px;
    text-align: justify;
}

.name {
    font-size: 20px;
    padding: 10px;
    font-family: 'dancing script', cursive;
}

.not-dragging
{
    transition: 0.20s transform ease-out;
}

.occupation {
    font-size: 15px;
}

img {
    user-select: none;
    height: 120px;
    border-radius: 500px;
    margin: 20px 20px 0 20px;
}



</style>

