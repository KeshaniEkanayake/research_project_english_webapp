<!-- contains a paragraph about sigiriya to paractice simple past and past continuous -->

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

                <p class="para-style"> Last year, I (1) <InputAnswer/> Sigiriya, an ancient rock fortress in Sri Lanka. It was a sunny day, 
                    and my family and I (2) <InputAnswer/> to explore this historic site. As we (3) <InputAnswer/> towards the towering rock, 
                    we (4) <InputAnswer/> at its grandeur. Tourists from around the world (5) <InputAnswer/> the steep stairs, and we (6) 
                    <InputAnswer/> them. While we (7) <InputAnswer/>, I couldn't believe the engineering feat of creating steps on such a massive rock.
                    As we (8) <InputAnswer/> the top, the breathtaking view of the surrounding landscape (9) <InputAnswer/> our breath away. 
                    We (10) <InputAnswer/> about the history of Sigiriya from our guide and imagined what life was like for the people who 
                    lived there centuries ago.
                </p>

                <br>
                 <!-- check answer button -->
                 <ButtonCheck/>
            </div>

            <!-- answers -->
            <div class="answers-box">
                <ButtonAnswer answer="1 walked"/> <br>
                <ButtonAnswer answer="2 joined"/> <br>
                <ButtonAnswer answer="3 were ascending"/> <br>
                <ButtonAnswer answer="4 visited "/> <br>
                <ButtonAnswer answer="5 reached"/> <br>
                <ButtonAnswer answer="6 marveled"/> <br>
                <ButtonAnswer answer="7 were excited"/> <br>
                <ButtonAnswer answer="8 were climbinig"/> <br>
                <ButtonAnswer answer="9 took"/> <br>
                <ButtonAnswer answer="10 learned"/> <br>

            </div>       
            <br> 



                       

        </div>
            
    </div>
</template>




<script>
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



.box-with-image{
        width: 30%;
        /* height: 550px; */
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../../../../assets/images/images-in-questions/sigiriya.jpg);
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