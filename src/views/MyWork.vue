<template>

<div class="container">
  <h1>My Work</h1>
    
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
                    <img :src="image">
    </carousel-slide>
  </carousel>

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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blue; */
  margin: 20px auto;
  /* width: 400px; */
}

img {
  margin: 0 50px;
}

</style>