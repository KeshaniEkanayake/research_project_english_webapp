<!-- this is a reusable card for all 3 module types->grammar, listening and reading -->
<template>
    <n-card size="medium" hoverable>
      <div class="card-content">
        <h3>{{ cardHeading }}</h3>
        <img :src="imageSrc" width="200" height="200"/>
        <br>
      </div>
    </n-card>
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


</style>