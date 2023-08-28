<!-- Basic/Grammar/Lesson2  question 2-->
<template>
    <div class="mainBackground1">
        <BreadCrumbs/>
        <div class="page-style2">           
                <!-- left box -->
                <div class="box-left">
                    <!-- inside-box class is taken from cssFile.css -->
                    <div class="inside-box">
                        <h2>Choose the correct preposition</h2>
                        <p>Please put the flowers _____ the table.</p>
                        <br>

                    <!-- radio buttons -->
                    <n-space>
                            <n-radio
                                :checked="checkedValue === 'in'"
                                value="in"
                                name="answers"
                                @change="handleChange"
                                size="large"
                            >
                            in
                            </n-radio>

                            <n-radio
                                :checked="checkedValue === 'on'"
                                value="on"
                                name="answers"
                                @change="handleChange"
                                size="large"
                            >
                                on
                            </n-radio>
                        </n-space>
                        <br>
                        <!-- check button -->
                        <ButtonCheck/>
                    </div>    
                </div>
           



                <!-- right box -->
                <div class="box-right"> </div> 
           

        </div>
    </div>
</template>



<script>
import {  ref } from "vue";
import ButtonCheck from "../../../../components/ButtonCheck.vue"
import BreadCrumbs from "../../../../components/BreadCrumbs.vue"


export default {
    // related to radio buttons
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
    ButtonCheck, BreadCrumbs,
  }
}
</script>

<style scoped>
@import url(../../../../assets/CSS/cssFile.css);

    .box-right {
        width: 40%;
        /* height: 50%; */
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../../../../assets/images/images-in-questions/flowers-on-table1.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */
    }
</style>