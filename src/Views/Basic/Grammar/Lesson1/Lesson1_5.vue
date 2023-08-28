<!-- /Basic/Grammar/Lesson 1    question 5 -->
<template>
    <div class="mainBackground1">
        <BreadCrumbs/>
        <div class="lesson1-page-style">
            <div class="middle-box-property">
                <div class="inside-box">
                    <table>
                        <tr>
                          <!-- scorebar -->
                          <td> <ScoreBar :currentScore="currentScore" :totalScore="totalScore" /></td>
                        </tr>
                    </table>
                    

                    <h2>Choose the suitable preposition</h2> <br>
                    <p>I'm addicted ___ that new series on Channel 4.</p>

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
import BreadCrumbs from "../../../../components/BreadCrumbs.vue"



export default({
    components:{
    ButtonCheck, ScoreBar, BreadCrumbs,
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

</style>