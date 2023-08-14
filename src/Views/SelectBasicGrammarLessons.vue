<!-- in this page students can select which grammar lesson they want to practice -->
<template>
  <div>
    <h1>Select grammar lesson to practice</h1>
    
    <ButtonSelection lessonName="Adjectives and Prepositions"/> <br>
    <ButtonSelection lessonName ="Prepositions of place - 'in', 'on', 'at' "/>
  </div>
</template>

<script>
import ButtonSelection from '../components/ButtonSelect.vue'

export default {
    components:{
        ButtonSelection,
    }
}
</script>

<style>

</style>