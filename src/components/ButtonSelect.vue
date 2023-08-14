<!-- reusable component for select options in grammar module -->
<!-- this is a long button -->
<template>
    <n-space>
      <n-button size="large" icon-placement="right" class="selectLessonButton">
        <template #icon>
          <n-icon><log-in-icon /></n-icon>
        </template>
        Add the name of the lesson
      </n-button>
    </n-space>
  </template>
  
  <script>
    import { LogInOutline as LogInIcon } from "@vicons/ionicons5";

    export default({
    components: {
      // import an icon into the button
      LogInIcon
    }
  });
  </script>

<style scoped>
/* add some formattings to select-lesson button */
  .selectLessonButton{
    border-radius: 12px;
    width: 800px;
    box-shadow: 10px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
</style>