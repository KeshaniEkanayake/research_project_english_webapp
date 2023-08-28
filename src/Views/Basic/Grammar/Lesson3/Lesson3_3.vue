<!-- Basci/Grammar/Lesson3  question 3 -->
<template>
    <div class="mainBackground1">
      <BreadCrumbs/>
  
      <div class="page-style1">
          <div class="middle-box-property">
              <div class="inside-box"> 
                <ScoreBar :currentScore="currentScore" :totalScore="totalScore"/>
  
                  <p>You made _____ mistakes. Well done!</p>
  
  
                  <!-- radio buttons -->
                  <n-space>
                          <n-radio
                              :checked="checkedValue === 'a few'"
                              value="a few"
                              name="answers"
                              @change="handleChange"
                              size="large"
                          >
                          a few
                          </n-radio>
  
                          <n-radio
                              :checked="checkedValue === 'few'"
                              value="few"
                              name="answers"
                              @change="handleChange"
                              size="large"
                          >
                          few
                          </n-radio>
                      </n-space>
                      <br><br>
                      <ButtonCheck/>
              </div>
          </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import {  ref } from "vue";
  import ButtonCheck from "../../../../components/ButtonCheck.vue"
  import ScoreBar from "../../../../components/ScoreBar.vue"
  import BreadCrumbs from "../../../../components/BreadCrumbs.vue"
  
  
  export default {
  // related to the radio buttons in the page
      setup() {
      const checkedValueRef = ref(null);
      
      return {
        disabled: ref(true),
        checkedValue: checkedValueRef,
        handleChange(e) {
          checkedValueRef.value = e.target.value;
        }
      };
    },
  
    components:{
      ButtonCheck, BreadCrumbs, ScoreBar
    },
  
     //   related scorebar
     data() {
          return {
          currentScore: 75, // Example current score
          totalScore: 100, // Example total score
          };
      },
  }
  </script>
  
  
  
  <style scoped>
  @import url(../../../../assets/CSS/cssFile.css);
  
  
   
  </style>