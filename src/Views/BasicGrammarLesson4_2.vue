<!-- grammar lesson 4- simple past tense and past continuous tense questions -->
<!-- a page wth 2 boxes -->

<template>
    <div class="page-structure">
        <!-- left box with an image -->
        <div class="box-left">
         
        </div>





        <!-- right part with the question content -->
            <div>
                <h2>Put the corresponding number of the answer in the give space</h2>

                <p class="para-style"> Last year, I had an incredible vacation in Ella, a charming hill country town in Sri Lanka. My friends and I decided to 
                    take a break from our studies and <InputAnswer/> there by train. The journey <InputAnswer/> long but exciting, as we <InputAnswer/> through 
                    lush green tea plantations and enjoyed the scenic views.</p>

                <p class="para-style">When we <InputAnswer/> in Ella, we <InputAnswer/> into a cozy guesthouse with a stunning view of the surrounding mountains. The weather 
                    <InputAnswer/> cool, and the air was crisp. On the first day, we <InputAnswer/> for a hike to Little Adam's Peak. As we <InputAnswer/> the trail, 
                    we spotted colorful butterflies and heard the songs of birds.</p>

                <p class="para-style">The next day, we <InputAnswer/> the Nine Arch Bridge, an iconic landmark. As we <InputAnswer/> on the bridge, a train <InputAnswer/>
                    underneath, and we <InputAnswer/> some amazing photos. Later, we <InputAnswer/> the town's market, where locals were selling fresh fruits, 
                    vegetables, and handmade crafts.</p>

                <p class="para-style">One evening, we <InputAnswer/> a bonfire at our guesthouse. While we <InputAnswer/> around the fire, we <InputAnswer/> stories and laughter 
                    with fellow travelers. The starry night sky <InputAnswer/> brightly above us.</p>

                <p class="para-style">As our vacation <InputAnswer/> to an end, we <InputAnswer/> our bags with unforgettable memories. Ella was a place of natural beauty and 
                    warm hospitality, and I <InputAnswer/> grateful for the experiences we had.</p>

                <br>
                    <!-- answers -->
             <table>
                    <tr>
                        <td><ButtonAnswer answer="1 checked"/></td>
                        <td><ButtonAnswer answer="2 packed"/></td>
                        <td><ButtonAnswer answer="3 was"/></td>
                        <td><ButtonAnswer answer="4 was"/></td>
                        <td><ButtonAnswer answer="5 arrived"/></td>
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="6 took"/></td>
                        <td><ButtonAnswer answer="7 felt"/></td>
                        <td><ButtonAnswer answer="8 traveled"/></td>
                        <td><ButtonAnswer answer="9 shared"/></td>
                        <td><ButtonAnswer answer="10 were passing"/></td>
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="11 were climbing"/></td>
                        <td><ButtonAnswer answer="12 explored"/></td>
                        <td><ButtonAnswer answer="13 joined"/></td>
                        <td><ButtonAnswer answer="14 were standing"/></td>
                        <td><ButtonAnswer answer="15 came "/></td>
                    </tr>

                    <tr>
                        <td><ButtonAnswer answer="1 was passing"/></td>
                        <td><ButtonAnswer answer="2 went"/></td>
                        <td><ButtonAnswer answer="2 was shining"/></td>
                        <td><ButtonAnswer answer="2 were sitting"/></td>
                        <td><ButtonAnswer answer="2 visited"/></td>
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
        /* align-items: center;  */
        /* Adjust the height as needed. This locates the box properly */
        /* height: 90vh;  */
        padding: 10px;
    }


.box-left {
        width: 50%;
        height: 550px;
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../assets/images/images-in-questions/ella.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */

    }
   

   .para-style{
    color: black;
    font-size: large;
    margin:0;
   }


</style>