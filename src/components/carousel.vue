<template>
  <div class="carousel">
      <slot></slot>

    <button @click="prev">prev</button>
    <button @click="next">next</button>
      
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

<style>

.carousel {
    position: relative;
    text-align: center;
    width: 400px;
    height: 520px;
    border: 1px solid pink;
    overflow: hidden;
}

button {
    margin: 0 30px;
    border: none;
    background-color: white;
    cursor: pointer;
}

button:hover {
   transform: scale(1.1);
}
</style>