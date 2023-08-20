<template>
    <div class="mainBackground1">
        <div class="page-structure">
            <!-- left box -->
            <div class="box-left">
                <div class="inside-box">
                    <h2>Choose the correct preposition</h2>
                    <p>On Friday mornings, I'm usually _________ school.</p>
                    <br>

                <!-- radio buttons -->
                <n-space>
                        <n-radio
                            :checked="checkedValue === 'at'"
                            value="at"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                        of
                        </n-radio>

                        <n-radio
                            :checked="checkedValue === 'in'"
                            value="in"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                            to
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
import ButtonCheck from "../components/ButtonCheck.vue"


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
    ButtonCheck
  }
}
</script>

<style scoped>
@import url(../assets/CSS/cssFile.css);

  /* arrange 2 boxes in the page in left and right */
    .page-structure{
        display: flex;
        /* keep a gap between 2 boxes */
        gap: 20px;
        justify-content: center;
        /* For vertical alignment -set same height for 2 boxes*/
        align-items: stretch; 
        /* Adjust the height as needed. This locates the box properly */
        /* height: 100vh;  */
    }

    /* white box in the left of the page */
    .box-left {
            width: 50%;
            border-radius: 1.25rem;
            background: #FFF;
            box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
            padding: 15px;
    }

    .box-right {
        width: 40%;
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../assets/images/images-in-questions/school.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */
    }

    /* content inside the left box */
.inside-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: large;
}  
</style>