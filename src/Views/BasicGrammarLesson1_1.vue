<!-- /Basic/Grammar/AdvPrepo   use this path to get the page displayed in th browser -->
<template>
    <div class="page-style">
        <div class="box-property">
            <div class="inside-box">
                <h4>Choose the suitable preposition</h4> <br>
                <p>I am really proud__________ of you!</p>

                <n-space>
                    <n-radio
                        :checked="checkedValue === 'of'"
                        value="of"
                        name="answers"
                        @change="handleChange"
                    >
                    of
                    </n-radio>

                    <n-radio
                        :checked="checkedValue === 'to'"
                        value="to"
                        name="answers"
                        @change="handleChange"
                    >
                        to
                    </n-radio>

                    <n-radio
                        :checked="checkedValue === 'with'"
                        value="with"
                        name="answers"
                        @change="handleChange"
                    >
                        with
                    </n-radio>
                </n-space>
            </div>
        </div>
    </div>
</template>



<script>
import { defineComponent, ref } from "vue";

// related to the radio buttons in the page
export default defineComponent({
  setup() {
    const checkedValueRef = ref(null);
    
    return {
      disabled: ref(true),
      checkedValue: checkedValueRef,
      handleChange(e) {
        checkedValueRef.value = e.target.value;
      }
    };
  }
});
</script>



<style scoped> 
    .page-style{
        display: flex;
        justify-content: center;
        /* For vertical alignment */
        align-items: center; 
        /* Adjust the height as needed. This locates the box properly */
        height: 100vh; 
     } 

     /* white box in the middle of the page */
    .box-property {
        height: 50%;
        width: 70%;
        border-radius: 1.25rem;
        background: #FFF;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    }

    .inside-box{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

   
</style>