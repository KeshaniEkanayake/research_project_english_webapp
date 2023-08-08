<template>
    <div class="mainBackground1">
        <div class="SelectProfLevel">
            <h1 class="heading1">Select Your Proficiency Level</h1><br>

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
  


<!-- use this "scope" to avoid overriding the styles related to this page in other pages-->
<style scoped>
@import url(../assets/CSS/cssFile.css);

  /* style related to this page */
   .SelectProfLevel{
        /* topic and the large box will be displayed in 1 column */
        display: flex;
        flex-direction: column;

        align-items: center;

        /* get all the elements located in the middle(vertically and horizontally) */
        /* justify-content: center; */
   }
   

</style>
  