<!-- contains a paragraph about sigiriya to paractice simple past and past continuous -->

<template>
  <div class="page-structure">
        <!-- left box with an image -->
        <div class="box-left">
         
        </div>





        <!-- right part with the question content -->
            <div class="right-content">
                <h2>Put the corresponding number of the answer in the given space</h2>

                <p class="para-style"> Last year, I (1) <InputAnswer/> Sigiriya, an ancient rock fortress in Sri Lanka. It was a sunny day, 
                    and my family and I (2) <InputAnswer/> to explore this historic site. As we (3) <InputAnswer/> towards the towering rock, 
                    we (4) <InputAnswer/> at its grandeur. Tourists from around the world (5) <InputAnswer/> the steep stairs, and we (6) 
                    <InputAnswer/> them. While we (7) <InputAnswer/>, I couldn't believe the engineering feat of creating steps on such a massive rock.
                     As we (8) <InputAnswer/> the top, the breathtaking view of the surrounding landscape (9) <InputAnswer/> our breath away. 
                     We (10) <InputAnswer/> about the history of Sigiriya from our guide and imagined what life was like for the people who 
                     lived there centuries ago.</p>

                <br>
                    <!-- answers -->
             <table>
                    <tr>
                        <td><ButtonAnswer answer="1 walked"/></td>
                        <td><ButtonAnswer answer="2 joined"/></td>
                        <td><ButtonAnswer answer="3 were ascending"/></td>
                        <td><ButtonAnswer answer="4 visited "/></td>
                        
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="5 reached"/></td>
                        <td><ButtonAnswer answer="6 marveled"/></td>
                        <td><ButtonAnswer answer="7 were excited"/></td>
                        <td><ButtonAnswer answer="8 were climbinig"/></td>
                       
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="9 took"/></td>
                        <td><ButtonAnswer answer="10 learned"/></td>
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
        background-image: url(../assets/images/images-in-questions/sigiriya.jpg);
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