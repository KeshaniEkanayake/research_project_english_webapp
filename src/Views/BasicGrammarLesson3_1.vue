<template>
  <div class="mainBackground1">
    <div class="page-style">
        <div class="box-property">
            <div class="inside-box"> 
                <p>I have__________ questions!</p>


                <!-- radio buttons -->
                <n-space>
                        <n-radio
                            :checked="checkedValue === 'a few'"
                            value="afew"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                        a few
                        </n-radio>

                        <n-radio
                            :checked="checkedValue === 'a bit of'"
                            value="a bit of"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                            a bit of
                        </n-radio>
                    </n-space>
                    <br>
                    <ButtonCheck/>
            </div>
        </div>
    </div>
  </div>
</template>



<script>
import {  ref } from "vue";
import ButtonCheck from "../components/ButtonCheck.vue"


export default {
// related to the radio buttons in the page
    setup() {
    const checkedValueRef = ref(null);
    
    return {
      disabled: ref(true),
      checkedValue: checkedValueRef,
      handleChange(e) {
        checkedValueRef.value = e.target.value;
      }
    };
  },

  components:{
    ButtonCheck
  }
}
</script>



<style scoped>
@import url(../assets/CSS/cssFile.css);

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
        width: 50%;
        border-radius: 1.25rem;
        background: #FFF;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    }

    .inside-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: large;
    }
</style>