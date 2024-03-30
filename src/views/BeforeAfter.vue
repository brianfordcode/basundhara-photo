<template>

<div class="main-container">
    
    <div class="images-container">
        <h1 class="title">Before & After</h1>
        <p>Have a look at how my client's headshots transform!</p>
        <div class="images" v-for="image in beforeAfter" :key="image">
            <img :src="image.img" alt="image" class="image">
        </div>
    </div>

</div>

</template>

<script>
export default {
    data() {
        return {
            beforeAfter: [
                {
                    img: "/beforeafter/1671175887468.jpeg"
                },
                {
                    img: "beforeafter/1674633848581.jpeg"
                },
                {
                    img: "beforeafter/1679452860034.jpeg"
                },
                {
                    img: "beforeafter/1680059827150.jpeg"
                },
                {
                    img: "beforeafter/1681282241149.jpeg"
                },
                {
                    img: "beforeafter/Anurag.jpg"
                },
                // {
                //     img: "beforeafter/BA_Aasifa.jpg"
                // },
                {
                    img: "beforeafter/Compare_Sanjay Vaid 0593.jpg"
                },
                {
                    img: "beforeafter/compare-min.jpg"
                },
                {
                    img: "beforeafter/compare-pratyush-dentons.jpg"
                },
                {
                    img: "beforeafter/debtanu-compare.jpg"
                },
                {
                    img: "beforeafter/Paritosh.jpeg"
                },
                {
                    img: "beforeafter/Ullas.jpg"
                },
            ]
        }
    }

}

</script>

<style scoped>

.main-container {
    margin: 0 auto;
}

.title {
    font-family: 'dancing script', cursive;
    padding-bottom: 20px;
    font-size: 50px;
}

p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-bottom: 20px;
}

.images-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.images {
    margin-bottom: 40px;
    overflow: hidden;
    border-radius: 20px;
}

img {
    height: auto;
    width: 750px;
    transition: transform 300ms ease-in-out;
}

img:hover {
    transform: scale(1.1);
  }

@media screen and (max-width: 1000px) {
    img {
        width: 500px;
    }
}

@media screen and (max-width: 700px) {
    .images-container {
        margin-top: 60px
    }
}

@media screen and (max-width: 500px) {
    img {
        width: 350px;
    }
}

</style>