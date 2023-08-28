<!-- grammar lesson 4- simple past tense and past continuous tense questions -->
<!-- a page wth 2 boxes -->

<template>
    <div class="background-color">
        <BreadCrumbs/>
        <div class="page-style2">
            <!-- left box with an image -->
            <div class="box-with-image">
                
            </div>





                <!-- right part with the question content -->
            <div class="box-left">
                <h2>Put the corresponding number of the answer in the given space</h2>

                <p class="para-style"> Last August, I (1) <InputAnswer/>(go) to Ella, a beautiful hill station in Sri Lanka, for a vacation. 
                    I (2) <InputAnswer/>(travel) there with my family. The journey took several hours by train.
                    While we (3) <InputAnswer/>(enjoy) the scenic views from the train, I (4) <InputAnswer/>(feel) a sense of excitement. When we (5) <InputAnswer/>(arrive) 
                    in Ella, the weather was perfect – the sun was shininig and a cool breeze (6) <InputAnswer/>(blow). We (7) <InputAnswer/>(stay) in a cozy 
                    cottage with stunning views of the surrounding tea plantations. During our stay, we (8) <InputAnswer/>(explore) the area by hiking to 
                    Little Adam's Peak and (9) <InputAnswer/>(visit) the Nine Arch Bridge. Each moment seemed like a new adventure. We (10) <InputAnswer/>(capture) 
                    many photos to remember the trip. Overall, my vacation in Ella was an unforgettable experience that I will cherish forever.</p>

                <br>

                <!-- check answer button -->
                <ButtonCheck/>

                        
                
                

            </div>

            <!-- answers -->
            <div class="answers-box">
                <ButtonAnswer answer="5 arrived"/> <br>
                <ButtonAnswer answer="9 visited"/><br>
                <ButtonAnswer answer="1 was blowing"/> <br>
                <ButtonAnswer answer="2 stayed"/><br>
                <ButtonAnswer answer="6 explored"/><br>
                <ButtonAnswer answer="10 went"/><br>
                <ButtonAnswer answer="3  were enjoying"/><br>
                <ButtonAnswer answer="7 traveled "/><br>
                <ButtonAnswer answer="4 felt"/><br>
                <ButtonAnswer answer="8  captured"/><br>
            </div>
            
        </div>
    </div>
</template>



<script>
// import a button to display answers 
import ButtonAnswer from "../../../../components/ButtonAnswer.vue"
import InputAnswer from "../../../../components/InputAnswer.vue"
import ButtonCheck from "../../../../components/ButtonCheck.vue"
import BreadCrumbs from "../../../../components/BreadCrumbs.vue"


export default {
components:{
    ButtonAnswer, InputAnswer,ButtonCheck, BreadCrumbs,
}
}
</script>



<style scoped>
.background-color{
    background-color: black;
}
.box-with-image {
        width: 30%;
        /* height: 550px; */
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../../../../assets/images/images-in-questions/ella.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */

    }
   
   .para-style{
    color: black;
    font-size: medium;
    
   }

.answers-box{
    border-radius: 1.25rem;
    background: #FFF;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    padding: 1%;
}



</style>