<template>
    <div class="SelectProfLevel">
        <h1>Select Your Proficiency Level</h1><br>

        <div class="cardAlignment">
            <LargeCard/>
        </div>
       

    </div>
</template>
  
  <script>
    import { defineComponent } from "vue"
    import LargeCard from "../components/LargeCard.vue"
    export default defineComponent({
        components:{
            LargeCard
        }
    })
</script>
  
<style>
  /* style related to this page */
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
    text-align: center;
    font-size: 50px;
    padding:5%;
   }

   /* centers the card in the page */
   .cardAlignment{
        display: flex;
        align-items: center;
        justify-content: center;

        /* moves the card away from botom margin */
        /* margin-top: 10%; */

   }

</style>
  