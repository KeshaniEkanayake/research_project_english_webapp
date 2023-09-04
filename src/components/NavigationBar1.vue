<!-- this top navigation bar is for a logged in user -->
<template>
  <nav class="navbar">
    <div>
      <router-link to="/"><img src="../assets/images/sampleLogo.jpeg" alt="score" class="logo-style"/></router-link>
    </div>
    <div class="navbar-links">
        <!-- total score of the student -->
        <router-link to="/">
            30/100
            <img src="../assets/images/icons/medal.svg" alt="score" class="icon-style"/>  
        </router-link>

        <!-- marks of a student for each type of lesson for eg: total marks for grammar -->
        <router-link to="/">
            <img src="../assets/images/icons/trophy.svg" alt="achievements" class="icon-style"/>  
        </router-link>

        <router-link to="/">
            <img src="../assets/images/icons/leaderboard.png" alt="achievents" class="icon-style"/>  
        </router-link>

        <router-link to="/">
            <img src="../assets/images/icons/logout-icon.svg" alt="logout" class="icon-style"/>  
        </router-link>

      <!-- Add more links as needed -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar1',
}
</script>

<style scoped>
/* Add your CSS styles for the navigation bar here */
.navbar {
  background-color: #05445E;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}


.navbar-links {
  display: flex;
  gap: 50px;
}

.navbar-links a {
  text-decoration: none;
  color: #fff;
}

.icon-style{
    width: 25px;
    height: 25px;
}

.logo-style{
    width: 100px;
    height: 30px;
}
</style>
