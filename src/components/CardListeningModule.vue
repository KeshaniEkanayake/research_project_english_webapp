<!-- reuse this card for listneing module in all three proficiency levels  -->
<!-- this is a reusable card for all 3 module types-grammar, listening and reading -->
<template>
    <n-card size="medium" class="n-card" hoverable>
      <div class="card-content">
        <h3>{{ cardHeading }}</h3>
        <img src="../assets/images/listening-vector.jpg" width="200" height="200"/>
        <br>
      </div>
    </n-card>
</template>
 


<script>
  export default({
    props:{
      cardHeading:{
        type: String,
      }
    }
  });
 
</script>




<style scoped>
  .n-card {
    /* max-width: 200px; */
    /* align-items: center; */

  }

  .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; /* Optional, to center-align the text */
    padding: 10px;
  }


</style>