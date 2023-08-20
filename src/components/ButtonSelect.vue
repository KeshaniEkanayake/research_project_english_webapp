<!-- reusable component for select lessons in grammar module -->
<!-- this is a long button -->
<template>
 
    <n-space>
       <!-- add a link dynamically -->
       <router-link :to="link" class="selectLessonButton">
          <n-button type="info" size="large" icon-placement="right" class="selectLessonButton">
            <template #icon>
              <n-icon><log-in-icon/></n-icon>
            </template>
            {{lessonName}}
          </n-button>
      </router-link>
    </n-space>
</template>
  





<script>
    import { LogInOutline as LogInIcon } from "@vicons/ionicons5";

    export default({
      name:"ButtonSelection",


      components: {
        // import an icon into the button
        LogInIcon
      },


      props: {
        lessonName: {
          type: String,
          // default value to be displayed 
          default: ()=>"lesson name",
        },

        // link to the button
        link: {
          type: String, // Route path for navigation
          required: true,
        },
      },


      
  });
</script>





<style scoped>
/* add some formattings to select-lesson button */
  .selectLessonButton{
    border-radius: 12px;
    width: 800px;
    box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    /* color of words */
    color: black;
    /* set a background color for the button */
    background-color: white;
  }
</style>