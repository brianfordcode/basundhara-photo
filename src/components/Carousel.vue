<template>
<div
    ref="mainContainer"
    class="category-container"
    @mousemove="makeArrowAppear"
    @mouseleave="mouseLeave"
>
    <!-- BOX OF ALL PICTURES BLUE -->
    <div
        ref="imageContainer"
        :class="{
            'images-container': true,
            'not-dragging': !dragging,
            'dragging': dragging
        }"
        :style="{
            transform: `translateX(${ position }px)`
        }"
        @mousedown="startDrag"
        @mousemove="mouseMove"
    >
        <!-- INDIVIDUAL PICTURES BLACK -->
        <img
            draggable="false"
            class="images"
            v-for="(image, index) in items"
            @click="expandPic(index)"
            :src="image.url"
            :key="image"
        >
    </div>

    <div v-if="showRightArrow"
        @click="slidePics(browserWidth)"
        id="prev-arrow"
        class="arrow-container"
    >
        <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/>
    </div>

    <div v-if="showLeftArrow"
        @click="slidePics(-browserWidth)"
        id="next-arrow"
        class="arrow-container"
    >
        <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png"/>
    </div>
</div>
</template>

<script>

export default {

mounted() {
    window.addEventListener('mouseup', this.endDrag)
    window.addEventListener('resize', this.clamp)
    window.addEventListener('keydown', this.handleKeyPress)
},

unmounted() {
    window.removeEventListener('mouseup', this.endDrag)
    window.removeEventListener('resize', this.clamp)
    window.removeEventListener('keydown', this.handleKeyPress)
},

props: {
    items: {
    type: Array,
    required: true
    },
},

data() {
    return {
    dragStarted: false,
    dragging: false,
    position: 0,
    posX: 0,
    posY: 0,
    showRightArrow: false,
    showLeftArrow: false,
    portraitsElement: null,
    modalOpen: false,
    selectedImageIndex: null,
    }
},

  computed: {
    selectedImage() {
      return this.portraits[this.selectedImageIndex]
    }
  },

  methods: {
    handleKeyPress(e) {
      if (e.key === 'ArrowRight') this.showImage(this.selectedImageIndex + 1)
      if (e.key === 'ArrowLeft') this.showImage(this.selectedImageIndex - 1)
      if (e.key === 'Enter') this.closePic()
    },

// MAIN PAGE

    // MOUSE DRAGGING
    startDrag(e) {
      this.dragging = true
      this.lastX = e.clientX
      this.startX = e.clientX
      this.dragging = true
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
      this.clamp()
    },

    clamp() {
      // last picture snaps back to end of window
      if (this.position >= 0) {
        this.position = 0
      } else {
        const tWidth = this.$refs.imageContainer.offsetWidth
        const mWidth = this.$refs.mainContainer.offsetWidth
        // clamp new position so that there is no whitespace to the right
        this.position = Math.max(mWidth - tWidth, this.position)
      }
    },

    // PREV/NEXT BUTTONS
    makeArrowAppear(e) {
      this.mousePos = e.clientX - 210
      this.browserWidth = this.$refs.mainContainer.offsetWidth
      // MOUSE ON LEFT SIDE OF WINDOW
      if (this.mousePos > this.browserWidth / 2) {
        this.showLeftArrow = true
        this.showRightArrow = false
      }
      // MOUSE ON RIGHT SIDE OF WINDOW
      if (this.mousePos < this.browserWidth / 2) {
        this.showLeftArrow = false
        this.showRightArrow = true
      }
      // MOUSE DRAGGING
      if (this.dragging) {
        this.showLeftArrow = false
        this.showRightArrow = false
      }
      // IF IMAGE SLIDER IS AT END OF IMAGES
      if (this.position === 0) this.showRightArrow = false
      if ((Math.abs(this.position) + this.browserWidth) === this.$refs.imageContainer.offsetWidth) this.showLeftArrow = false
    },

    mouseLeave() {
      this.showLeftArrow = false
      this.showRightArrow = false
    },

    slidePics(distance) {
      this.position += distance
      this.clamp()
    },






  }
}

</script>

<style scoped>

    .category-container {
        /* border: 1px solid pink; */
        margin-bottom: 30px;
        overflow: hidden;
        position: relative;
    }

    .images-container {
        user-select: none;
        width: min-content;
        height: min-content;
        display: flex;
        /* border: 1px solid blue; */
        position: relative;
        
    }

    .images {
        /* border: 1px solid black; */
        height: 250px;
        margin: 5px;
        transition: .2s, fade-in-out;
        user-select: none;
        box-shadow: 0px 2px 16px 0px rgba(0,0,0,0.15);
    }

    .images:hover {
        transform: scale(1.03);
    }

    .not-dragging {
        cursor: grab;
        transition: 0.20s transform ease-out;
    }

    .dragging {
        cursor: grabbing;
    }

    .arrow-container {
        user-select: none;
        position: absolute;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 25px;
        padding: 5px;
        margin: 5px;
        background-color: rgba(255,255,255,0.8);
        cursor: pointer;
        height: 50px;
        width: 50px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        top: 50%;
        transform: translateY(-50%);
        transition: .2s ease-in-out;
    }

    #prev-arrow {
        justify-content: center;
        left: 0;
    }

    #next-arrow {
        justify-content: center;
        right: 0;
    }

    .arrow-container:hover {
        transform: translateY(-50%) scale(1.05);
    }

    
</style>