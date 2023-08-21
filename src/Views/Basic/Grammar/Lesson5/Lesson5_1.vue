<!-- basic -> grammar-> lesson 5(simple present tense) -->
<template>
    <div class="mainBackground1">
        <div class="page-style center-item">
            <!-- QUESTION CONTENT  -->
            <div class="box-property">
                <h2>Fill in the blanks</h2>
                <p>She <InputAnswer1/> in a Hospital (WORK)</p>

                <!-- check button -->
                <br><br>
                <ButtonCheck/>
            </div>
        </div>
    </div>
</template>




<script>
import ButtonCheck from "../../../../components/ButtonCheck.vue"
import InputAnswer1 from "../../../../components/InputAnswer1.vue"


export default {
    components: {
        ButtonCheck, InputAnswer1
    }
}
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
        height: 50%;
        width: 50%;
        border-radius: 1.25rem;
        background: #FFF;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        padding: 10px;
        font-size: large;
    }

    p{
        color: #000000;

    }

</style>