<template>


<div class="main-container">
  <h1>My Work</h1>  
<div class="images-container">

  
  <carousel
      @next="next"
      @prev="prev"
  >
  
    <carousel-slide v-for="(image, index) in images"
                    :key="image"
                    :index="index"
                    :visibleImage="visibleImage"
                    :direction="direction"
                    >
                    <img class="featured-image" :src="image">
    </carousel-slide>
  </carousel>
</div>


  <div class="img-lineup">
    <img class="image" v-for="image in images" :src="image" :key="image">
  </div>

</div>
  
</template>

<script>
import carousel from '../components/carousel.vue'
import carouselSlide from '../components/carousel-slide.vue'

export default {
  components: {
    carouselSlide,
    carousel
  },

  computed: {
    imagesLength() {
      return this.images.length
    }
  },

  methods: {
    next() {
      if (this.visibleImage >= this.imagesLength - 1) {
        this.visibleImage = 0
      } else {
        this.visibleImage++
      }
      this.direction = "left"
    },
    prev() {
      if (this.visibleImage <= 0) {
        this.visibleImage = this.imagesLength - 1
      } else {
        this.visibleImage--
      }
      this.direction = "right"
    }
  },

  data() {
    return {
      images: [
        'https://picsum.photos/id/230/350/500',
        'https://picsum.photos/id/231/350/500',
        'https://picsum.photos/id/232/350/500',
        'https://picsum.photos/id/233/350/500',
        'https://picsum.photos/id/234/350/500',
        'https://picsum.photos/id/235/350/500',
        'https://picsum.photos/id/236/350/500',
      ],
      visibleImage: 0,
      direction: '',
    }
  }


}
</script>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px solid pink;
}

h1 {
  padding: 20px;
}

.images-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid blue;
  margin: 0 auto;
  /* width: 400px; */
}

.featured-image {
  margin: 0 50px;
}


.img-lineup {
  margin: 20px auto;
  border: 1px solid blue;
}

.image {
  height: 150px;
  width: auto;
  margin: 10px;
  transition: .2s, fade-in-out;

}

.image:hover {
  transform: scale(1.1);
  cursor: pointer;
}

</style>