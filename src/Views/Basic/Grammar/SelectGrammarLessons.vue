<!-- in this page students can select the  grammar lesson they want to practice -->
<template>
  <div class="mainBackground1">
    <div class="page-style">
      <h1 class="heading1">Select grammar lesson to practice</h1>

      
        <!-- @click ="lesson" -->
        <ButtonSelection :link="lesson1Path" lessonName="Adjectives and Prepositions" /> <br>
        <ButtonSelection :link="lesson2Path" lessonName ="Prepositions of place - 'in', 'on', 'at' "/> <br>
        <ButtonSelection :link="lesson3Path" lessonName ="Quantifiers: 'few', 'a few', 'little' and 'a bit of' "/> <br>
        <ButtonSelection :link="lesson4Path" lessonName ="Simple Present Tense "/> <br>
        <!-- <ButtonSelection :link="lesson5Path" lessonName ="Simple Prast Tense and Past Continuous Tense"/> -->
    </div>
  </div>
</template>

<script>
import ButtonSelection from '../../../components/ButtonSelect.vue'

export default {
   components:{
        ButtonSelection,
    },

    computed: {
    lesson1Path() {
      return '/Basic/Grammar/Lesson1_1'; // Modify with your path that you given in the route.vue file under "path:" variable
    },
    lesson2Path() {
      return '/Basic/Grammar/Lesson2_1'; // Modify with your path that you given in the route.vue file  "path:" variable
    },
    lesson3Path() {
      return '/Basic/Grammar/Lesson3_1'; // Modify with your path that you given in the route.vue file  "path:" variable
    },
    lesson4Path() {
      return '/Basic/Grammar/Lesson4_1'; // Modify with your path that you given in the route.vue file  "path:" variable
    },
  },
}
</script>

<style scoped>
@import url(../../../assets/CSS/cssFile.css);

.page-style{
        /* topic and the large box will be displayed in 1 column */
        display: flex;
        flex-direction: column;

        align-items: center;

        /* get all the elements located in the middle(vertically and horizontally) */
        /* justify-content: center; */
   }

 

</style>