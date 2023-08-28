<!-- basic -> grammar-> lesson 5(simple present tense) -->
<template>
    <div class="mainBackground1">
        <div class="page-style1">
            <!-- QUESTION CONTENT  -->
            <div class="middle-box-property">
                <div class="inside-box">
                    <table>
                        <tr>
                          <!-- scorebar -->
                          <td> <ScoreBar :currentScore="currentScore" :totalScore="totalScore" /></td>
                        </tr>
                    </table>

                    <h2>Fill in the blanks</h2>
                    <p>They <InputAnswer1/> go to the cinema very often. (NOT GO)</p> 
                      

                    <!-- check button -->
                    <br><br>
                    <ButtonCheck/>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import ButtonCheck from "../../../../components/ButtonCheck.vue"
import InputAnswer1 from "../../../../components/InputAnswer1.vue"
import ScoreBar from "../../../../components/ScoreBar.vue"


export default {
    components: {
        ButtonCheck, InputAnswer1, ScoreBar,
    }, 

    //   related scorebar
    data() {
        return {
        currentScore: 75, // Example current score
        totalScore: 100, // Example total score
        };
    },
}
</script>




<style scoped>
@import url(../../../../assets/CSS/cssFile.css);

    p{
        color: #000000;

    }

</style>