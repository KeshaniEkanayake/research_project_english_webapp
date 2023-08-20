<!-- basic -> grammar-> lesson 5(simple present tense) -->
<template>
    <div class="page-style center-item">
        <!-- QUESTION CONTENT  -->
        <div class="box-property">
            <h2>Fill in the blanks</h2>
            <p>She --- in a Hospital (WORK)</p>

            <!-- check button -->
            <br><br>
                <ButtonCheck/>
        </div>
    </div>
</template>




<script>
import ButtonCheck from "../../../../components/ButtonCheck.vue"

export default {
    components: {
        ButtonCheck,
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
    }

</style>