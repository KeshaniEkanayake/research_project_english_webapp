<!-- /Basic/Grammar/AdvPrepo   use this path to get the page displayed in th browser -->
<template>
    <div class="mainBackground1">
        <div class="page-style">
            <div class="box-property">
                <div class="inside-box">

                    <!-- scorebar -->
                    <ScoreBar :currentScore="currentScore" :totalScore="totalScore" />


                    <h2>Choose the suitable preposition</h2> <br>
                    <p>I am really proud__________ of you!</p>

                    <n-space>
                        <n-radio
                            :checked="checkedValue === 'of'"
                            value="of"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                        of
                        </n-radio>

                        <n-radio
                            :checked="checkedValue === 'to'"
                            value="to"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                            to
                        </n-radio>

                        <n-radio
                            :checked="checkedValue === 'with'"
                            value="with"
                            name="answers"
                            @change="handleChange"
                            size="large"
                        >
                            with
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
import ButtonCheck from "../../../../components/ButtonCheck.vue"
import ScoreBar from "../../../../components/ScoreBar.vue"


export default({
    components:{
    ButtonCheck, ScoreBar,
    },


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


    //   related scorebar
    data() {
        return {
        currentScore: 75, // Example current score
        totalScore: 100, // Example total score
        };
    },
});
</script>



<style scoped> 
@import url(../../../../assets/CSS/cssFile.css);

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
        height: auto;
        width: 50%;
        border-radius: 1.25rem;
        background: #FFF;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        padding: 1%;
    }

    .inside-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: large;
    }
</style>