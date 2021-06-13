<template>
<div class="form-container">
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label>
  </p>
  <p class="message">
    <label class="message-title" for="textarea">Message:</label>
    <textarea/>
    <button>Submit</button>
  </p>
  

</div>

  



</template>

<script>
export default {
    
    data() {
        return {
            
        }
    }

}
</script>

<style scoped>

body {
  height: 100vh;
  display: flex;
  align-items: left;
}

p {
  padding: 10px;
}

label {
  font-family: 'dancing script', cursive;
}

input {
  border: none;
  border-bottom: 1px solid rgb(30, 30, 114);
  outline: none;
  width: 250px;
  /* font-size: 15px; */
}

.message-title {
  padding-bottom: 5px;
}

textarea {
  /* margin-top: 10px; */
  height: 100px;
  width: 300px;
  border: 1.5px solid rgb(30, 30, 114);
  border-radius: 10px;
  outline: none;
  resize: none;
  padding: 5px;
}

.message {
  display: flex;
  flex-direction: column;
}
button {
  width: 100px;
  padding: 0 auto;
  margin: 10px 0;
  color: rgb(230, 230, 230);
  background-color: rgb(30, 30, 114);
  border-radius: 50px;
  padding: 10px;
  border: none;
  transition: .2s, fade-in-out;
  cursor: pointer;
}

button:hover {
  transform: scale(1.1);
}



</style>