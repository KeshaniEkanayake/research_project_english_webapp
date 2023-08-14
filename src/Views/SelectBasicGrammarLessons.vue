<!-- in this page students can select the  grammar lesson they want to practice -->
<template>
  <div>
    <h1>Select grammar lesson to practice</h1>

    <!-- @click ="lesson" -->
    <ButtonSelection @click="navToLesson1" lessonName="Adjectives and Prepositions" /> <br>
    <ButtonSelection @click="navToLesson2" lessonName ="Prepositions of place - 'in', 'on', 'at' "/> <br>
    <ButtonSelection lessonName ="Quantifiers: 'few', 'a few', 'little' and 'a bit of' "/> <br>
    <ButtonSelection lessonName ="Simple Present Tense "/> <br>
    <ButtonSelection lessonName ="Simple Prast Tense and Past Continuous Tense"/>

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

<style>

</style>