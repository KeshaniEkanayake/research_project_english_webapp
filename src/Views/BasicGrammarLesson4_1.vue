<!-- page to select the task in grammar lesson 4 -->
<template>
  <div class="mainBackground1">
    <div class="page-style">
        <ButtonSelection @click="navToLesson1" lessonName="Task 1" /> <br>
        <ButtonSelection @click="navToLesson2" lessonName="Task 2" /> <br>
    </div>
   
  </div>
</template>




<script>
import ButtonSelection from '../components/ButtonSelect.vue'

export default {
    components:{
        ButtonSelection,
    },

    methods: {
      // add a navigation to the corresponding grammar lesson when each button is clicked  
        navToLesson1(){
          console.log("navigate to task 1...");
        },

        navToLesson2(){
          console.log("navigate to task 2...");
        },
    },
}
</script>




<style scoped>
@import url(../assets/CSS/cssFile.css);

.page-style{
        /* topic and the large box will be displayed in 1 column */
        display: flex;
        flex-direction: column;

        align-items: center;

        /* get all the elements located in the middle(vertically and horizontally) */
        justify-content: center;
        /* Adjust the height as needed. This locates the box properly */
        height: 100vh; 
   }
</style>