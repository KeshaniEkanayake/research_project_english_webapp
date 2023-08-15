<!-- reusable component for select lessons in grammar module -->
<!-- this is a long button -->
<template>
    <n-space>
      <!-- @click="handleClick" is used to add link to the button -->
      <!-- v-on="$listner" is used to add a listner to button(to add a link in a dynamic way) -->
      <!-- v-bind="$attrs" is used to make button component listen to events provided dynamically -->
      <n-button type="info" size="large" icon-placement="right" class="selectLessonButton">
        <template #icon>
          <n-icon><log-in-icon/></n-icon>
        </template>
            {{lessonName}}
      </n-button>
    </n-space>
</template>
  





<script scoped>
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