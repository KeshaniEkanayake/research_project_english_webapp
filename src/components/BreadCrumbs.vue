<!-- make this breadcrumb dynamic(reusable)  -->
<template>
  <span>
    <n-breadcrumb separator="">
        <n-breadcrumb-item> 
          <span class="breadcrumb-style">Basic</span>
          <span class="breadcrumb-separator"> > </span>
        </n-breadcrumb-item>
      
        <n-breadcrumb-item>
          <span class="breadcrumb-style">Grammar </span>
          <span class="breadcrumb-separator"> > </span>
        </n-breadcrumb-item>
        
        <n-breadcrumb-item>
          <span class="breadcrumb-style">Lesson 1 </span>
          <span class="breadcrumb-separator"> > </span>
        </n-breadcrumb-item>
    </n-breadcrumb>
  </span>
  </template>
  


  <script>  
  export default ({
   
  });
  </script>


<style scoped>
   .breadcrumb-style {
  color: aliceblue; /* Change the text color of breadcrumb items */
  font-weight: 500;
}




/* style for the separator > */
.breadcrumb-separator {
  color:aliceblue; /* Change this to your desired separator color */
  font-weight: 500;
}
</style>