<!-- in this page students can select the  grammar lesson they want to practice -->
<template>
  <div class="mainBackground1">
    <div class="page-style">
      <h1 class="heading1">Select grammar lesson to practice</h1>

      
        <!-- @click ="lesson" -->
        <ButtonSelection @click="navToLesson1" lessonName="Adjectives and Prepositions" /> <br>
        <ButtonSelection @click="navToLesson2" lessonName ="Prepositions of place - 'in', 'on', 'at' "/> <br>
        <ButtonSelection lessonName ="Quantifiers: 'few', 'a few', 'little' and 'a bit of' "/> <br>
        <ButtonSelection lessonName ="Simple Present Tense "/> <br>
        <ButtonSelection lessonName ="Simple Prast Tense and Past Continuous Tense"/>
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
          console.log("navigate to lesson 1...");
        },

        navToLesson2(){
          console.log("navigate to lesson 2...");
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
        /* justify-content: center; */
   }

 

</style>