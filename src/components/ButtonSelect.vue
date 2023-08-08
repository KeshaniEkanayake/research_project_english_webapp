<!-- reusable component for select options in grammar module -->
<template>
    <n-space>
      <n-button :render-icon="renderIcon">
        +100$
      </n-button>
      <n-button icon-placement="right">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        +100$
      </n-button>
    </n-space>
  </template>
  
  <script>
  import { CashOutline as CashIcon } from "@vicons/ionicons5";
  import { NIcon } from "naive-ui";
  import { defineComponent, h } from "vue";
  
  export default defineComponent({
    components: {
      CashIcon
    },
    setup() {
      return {
        renderIcon() {
          return h(NIcon, null, {
            default: () => h(CashIcon)
          });
        }
      };
    }
  });
  </script>