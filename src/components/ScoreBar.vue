<!-- scorebar -->
<template>
    <div class="score-bar">
      <div class="score-label">Score: {{ currentScore }} / {{ totalScore }}</div>
      <div class="score-progress">
        <div class="score-fill" :style="{ width: progressWidth }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentScore: Number,
      totalScore: Number,
    },
    computed: {
      progressWidth() {
        return `${(this.currentScore / this.totalScore) * 100}%`;
      },
    },
  };
  </script>
  
  <style scoped>
  .score-bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .score-label {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .score-progress {
    width: 100%;
    height: 20px;
    background-color: #f0f0f0;
    position: relative;
    border-radius: 1.25rem;
  }
  
  .score-fill {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease-in-out;
    border-radius: 1.25rem;
  }
  </style>
  