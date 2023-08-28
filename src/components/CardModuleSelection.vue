<!-- this is a reusable card for all 3 module types->grammar, listening and reading -->
<template>
  <!-- add navigation path when the card is clicked -->
  <router-link :to="link">
    <n-card size="medium" hoverable class="card-style">
      <div class="card-content">
        <h3>{{ cardHeading }}</h3>
        <img :src="imageSrc" width="200" height="200"/>
        <br>
      </div>
    </n-card>
  </router-link>
</template>
 


<script>
  export default({
    props:{
      cardHeading:{
        type: String,
      },

      // used to add an image dynamically to the card
      imageSrc: {
              type: String,
              required: true, // Make the prop required
      },

      // add navigation path
      link: {
          type: String, // Route path for navigation
          // required: true,
        },
    },  
  });
 
</script>




<style scoped>
  .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; /* Optional, to center-align the text */
    padding: 10px;
  }

  .card-style{
        border-radius: 1.25rem;
    }
</style>