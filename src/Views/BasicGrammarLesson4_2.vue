<!-- grammar lesson 4- simple past tense and past continuous tense questions -->
<!-- a page wth 2 boxes -->

<template>
    <div class="page-structure">
        <!-- left box with an image -->
        <div class="box-left">
        </div>


        <!-- right box with the question content -->
        <div class="box-right">
            <div  class="inside-box">
                <p>Last year, I had an incredible vacation in Ella, a charming hill country town in Sri Lanka. My friends and I decided to 
                    take a break from our studies and traveled there by train. The journey was long but exciting, as we were passing through 
                    lush green tea plantations and enjoyed the scenic views.</p>

                <p>When we arrived in Ella, we checked into a cozy guesthouse with a stunning view of the surrounding mountains. The weather 
                    was cool, and the air was crisp. On the first day, we went for a hike to Little Adam's Peak. As we were climbing the trail, 
                    we spotted colorful butterflies and heard the songs of birds.</p>

                <p>The next day, we visited the Nine Arch Bridge, an iconic landmark. As we were standing on the bridge, a train was passing 
                    underneath, and we took some amazing photos. Later, we explored the town's market, where locals were selling fresh fruits, 
                    vegetables, and handmade crafts.</p>

                <p>One evening, we joined a bonfire at our guesthouse. While we were sitting around the fire, we shared stories and laughter 
                    with fellow travelers. The starry night sky was shining brightly above us.</p>

                <p>As our vacation came to an end, we packed our bags with unforgettable memories. Ella was a place of natural beauty and 
                    warm hospitality, and I felt grateful for the experiences we had.</p>
            </div>
        </div>
    </div>
</template>



<script>
export default {

}
</script>



<style scoped>
/* arrange 2 boxes in the page in left and right */
.page-structure{
        display: flex;
        /* keep a gap between 2 boxes */
        gap: 20px;
        justify-content: center;
        /* For vertical alignment */
        align-items: center; 
        /* Adjust the height as needed. This locates the box properly */
        /* height: 90vh;  */
    }


.box-left {
        width: 30%;
        height: 550px;
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../assets/images/images-in-questions/school.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */

    }

    .box-right {
            width: 60%;
            height: 550px;
            border-radius: 1.25rem;
            background: #FFF;
            box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
            overflow-y: auto; /* Enable vertical scrolling if content exceeds box height */
    }

    .inside-box{
        display: flex;
        flex-direction: column;
        
        padding: 10px;
    }  

    p{
        color: black;
        font-size: large;
   }
</style>