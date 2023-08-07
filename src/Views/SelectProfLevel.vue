<template>
    <div class="SelectProfLevel">
      <h1>Select proficiency level</h1>

      <!-- buttons to select different proficiency levels -->
      <ButtonBasicProfLevel/>
      <br>             
      <ButtonIntermediateProfLevel/>
      <br>
      <ButtonAdvancedProfLevel/>


    </div>
</template>
  
  <script>
//   related to component
  import { defineComponent } from "vue"; 
  import ButtonBasicProfLevel from "../components/ButtonBasicProfLevel.vue"
  import ButtonIntermediateProfLevel from "../components/ButtonIntermediateProfLevel.vue"
  import ButtonAdvancedProfLevel from "../components/ButtonAdvancedProfLevel.vue"

  export default defineComponent({
    components:{
        ButtonBasicProfLevel,
        ButtonIntermediateProfLevel,
        ButtonAdvancedProfLevel
    },
  });
  </script>
  
  <style>
   .SelectProfLevel{
    background-image: url(../assets/images/main-background.jpg);
    background-repeat: no-repeat;
    /* Optional: Adjust the background size to fit the element */
/* Other values: contain, 100% 100%, etc. */
    background-size: cover; 
    /* used to add the image to the whole background */
    min-height: 100vh;


   }
   
   h1{
    color: azure;
   }
  </style>
  