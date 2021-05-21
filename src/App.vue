<template>

  <router-view/>
  
  <navbar/>


</template>


<script>

  import navbar from './components/nav-bar'

  export default {
    components: {
      navbar
    }
  }

</script>
