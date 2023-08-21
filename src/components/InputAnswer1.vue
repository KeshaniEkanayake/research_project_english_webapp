<!-- used to get one or two word answer for a fill in the blanks question -->
<template>
      <input
        v-model="inputValue"
        id="inputField"
        type="text"
        @input="handleInput"
      />
  </template>
  
  <script>
  export default {
    data() {
    //   return {
    //     inputValue: '',
    //   };
    },
    methods: {
      handleInput(event) {
        this.inputValue = event.target.value;
      },
    },
  };
  </script>




<style scoped>
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20%;
  box-sizing: border-box;

  background-color: #D4F1F4; /* Add the background color here */
}

</style>

  