<template>
  <div class="carousel">
      <slot></slot>
      

    <button class="prev" @click="prev">prev</button>
    <button class="next" @click="next">next</button>
      
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        next() {
            this.$emit('next')
        },
        prev() {
            this.$emit('prev')
        }
    }
}
</script>

<style scoped>

.carousel {
    position: relative;
    width: 450px;
    height: 500px;
    overflow: hidden;
    /* border: 1px solid black; */
    /* text-align: center; */
}

button {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    background-color: rgba(0,0,0,0.8);
    border: none;
    color: #FFF;
}
button:focus, button:hover {
    outline: none;
    cursor: pointer;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}


</style>