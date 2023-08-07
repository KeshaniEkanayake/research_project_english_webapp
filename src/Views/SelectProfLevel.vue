<template>
    <div class="selectProfLevel">
      <h1>Select proficiency level</h1>
      <p>Welcome to our website! We are a company that specializes in creating awesome products.</p>

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
  .selectProfLevel {
    padding: 20px;
    background-color: #f2f2f2;
  }
  
  </style>
  