<!-- grammar lesson 4- simple past tense and past continuous tense questions -->
<!-- a page wth 2 boxes -->

<template>
    <div class="page-structure">
        <!-- left box with an image -->
        <div class="box-left">
         
        </div>





        <!-- right part with the question content -->
            <div class="right-content">
                <h2>Put the corresponding number of the answer in the given space</h2>

                <p class="para-style"> Last August, I (1) <InputAnswer/>(go) to Ella, a beautiful hill station in Sri Lanka, for a vacation. 
                I (2) <InputAnswer/>(travel) there with my family. The journey (3) <InputAnswer/>(take) several hours by train.
                While we (4) <InputAnswer/>(enjoy) the scenic views from the train, I (5) <InputAnswer/>(feel) a sense of excitement. When we (6) <InputAnswer/>(arrive) 
                in Ella, the weather (7) <InputAnswer/>(be) perfect – the sun (8) <InputAnswer/>(shine) and a cool breeze (9) <InputAnswer/>(blow). We (10) <InputAnswer/>(stay) in a cozy 
                cottage with stunning views of the surrounding tea plantations. During our stay, we (11) <InputAnswer/>(explore) the area by hiking to 
                Little Adam's Peak and (12) <InputAnswer/>(visit) the Nine Arch Bridge. Each moment (13) <InputAnswer/>(seem) like a new adventure. We (14) <InputAnswer/>(capture) 
                many photos to remember the trip. Overall, my vacation in Ella (15) <InputAnswer/>(be) an unforgettable experience that I will cherish forever.</p>

                <br>
                    <!-- answers -->
             <table>
                    <tr>
                        <td><ButtonAnswer answer="1 took"/></td>
                        <td><ButtonAnswer answer="5 arrived"/></td>
                        <td><ButtonAnswer answer="9 visited"/></td>
                        <td><ButtonAnswer answer="13 was blowing"/></td>
                        
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="2 stayed"/></td>
                        <td><ButtonAnswer answer="6 explored"/></td>
                        <td><ButtonAnswer answer="10 went"/></td>
                        <td><ButtonAnswer answer="14 was"/></td>
                       
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="3  were enjoying"/></td>
                        <td><ButtonAnswer answer="7 was"/></td>
                        <td><ButtonAnswer answer="11 seemed"/></td>
                        <td><ButtonAnswer answer="15 traveled "/></td>
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="4 felt"/></td>
                        <td><ButtonAnswer answer="8  captured"/></td>
                        <td><ButtonAnswer answer="12  was shining"/></td>

                    </tr>

                </table>
                   <br> 
                <!-- check answer button -->
                <ButtonCheck/>

            </div>
        <!-- </div> -->
    </div>
</template>



<script>
// import a button to display answers 
import ButtonAnswer from "../components/ButtonAnswer.vue"
import InputAnswer from "../components/InputAnswer.vue"
import ButtonCheck from "../components/ButtonCheck.vue"

export default {
components:{
    ButtonAnswer, InputAnswer,ButtonCheck,
}
}
</script>



<style scoped>
/* arrange 2 boxes in the page in left and right */
.page-structure{
        display: flex;
        /* keep a gap between 2 boxes */
        gap: 20px;
        /* justify-content: center; */
        /* For vertical alignment */
        align-items: stretch; /* Align items with the same height */ 
        /* Adjust the height as needed. This locates the box properly */
        /* height: 90vh;  */
        padding: 10px;
    }


.box-left {
        width: 30%;
        /* height: 550px; */
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../assets/images/images-in-questions/ella.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */

    }
   

    .right-content{
        width: 60%;
    }
   .para-style{
    color: black;
    font-size: medium;
    
   }


</style>