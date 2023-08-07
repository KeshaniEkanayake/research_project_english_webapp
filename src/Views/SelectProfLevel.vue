<template>
    <div class="selectProfLevel">
      <h1>Select proficiency level</h1>
      <p>Welcome to our website! We are a company that specializes in creating awesome products.</p>
      <ButtonBasicProfLevel/>
    </div>
  </template>
  
  <script>
//   related to component
  import { defineComponent } from "vue"; 
  import ButtonBasicProfLevel from "../components/ButtonBasicProfLevel.vue"

  export default defineComponent({
    components:{ButtonBasicProfLevel},
  });
  </script>
  
  <style>
  .selectProfLevel {
    padding: 20px;
    background-color: #f2f2f2;
  }
  h1 {
    color: #333;
  }
  p {
    color: #666;
    line-height: 1.6;
  }
  </style>
  