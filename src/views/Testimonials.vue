<template>
  <div class="testimonial-container">
      <q>{{ testimonial.testimonial }}    
      </q>
      <div class="name-image">
          <img :src="testimonial.picture" alt="testimonial-pic">
          <h1>{{ testimonial.name }}</h1>
          <h2>{{ testimonial.occupation }}</h2>
      </div>
  </div>
</template>

<script>
export default {

    data() {
        return {
            testimonial: 
                {
                    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    name: "name name",
                    occupation: "occupation",
                    picture: "https://picsum.photos/200/200"
                }
            
        }
    }

}
</script>

<style scoped>

.testimonial-container {
    border: 1px solid black;
    border-radius: 20px;
    position: relative;
    padding: 20px;
    width: 200px;
    height: 100%;
}

.name-image {
    text-align: center;
    padding: 20px 20px 0 20px;
}

img {
    height: 90px;
    border-radius: 50px;

}



</style>