<template>
    <div class="SelectProfLevel">
        <h1>Select Your Proficiency Level</h1><br>

            <LargeCard/>
       
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
  


<!-- use this "scope" to avoid overriding the styles related to this page in other pages-->
<style scoped>
    /* to remove the white space in the upper part of the page */
    *{
        /* margin: 0px; */
    }

  /* style related to this page */
   .SelectProfLevel{
        background-image: url(../assets/images/main-background.jpg);
        background-repeat: no-repeat;
        /* Optional: Adjust the background size to fit the element */
        /* Other values: contain, 100% 100%, etc. */
        background-size: cover; 
        /* used to add the image to the whole background */
        min-height: 100vh; 
        
        /* topic and the large box will be displayed in 1 column */
        display: flex;
        flex-direction: column;

        align-items: center;

        /* get all the elements located in the middle(vertically and horizontally) */
        justify-content: center;
   }
   
   h1{
    color: azure;
    text-align: center;
    font-size: 60px;
    
   }


</style>
  