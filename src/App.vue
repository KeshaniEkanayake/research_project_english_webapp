<template>
  <h1>header in the App.vue file</h1>
  <!-- <Login/>  -->
  
  <div id="app">
    <!-- route components will be rendered here -->
    <router-view></router-view>
  </div>
</template>



<script>
// import Login from './components/Login.vue'

export default {
  name: 'App',
  // components: {Login},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
