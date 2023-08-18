<template>
    <div class="page-structure">
        <!-- left box -->
        <div class="box-left">
            <div class="inside-box">
                <h2>Choose the correct preposition</h2>
                <p>On Friday mornings, I'm usually _________ school.</p>
            </div>    
        </div>





        <!-- right box -->
        <div class="box-right">

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
        /* For vertical alignment */
        align-items: center; 
        /* Adjust the height as needed. This locates the box properly */
        height: 90vh; 
    }

    /* white box in the left of the page */
    .box-left {
            width: 60%;
            height: 500px;
            border-radius: 1.25rem;
            background: #FFF;
            box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    }

    .box-right {
        width: 40%;
        height: 500px;
        border-radius: 1.25rem;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        /* add the background image  */
        background-image: url(../assets/images/images-in-questions/school.jpg);
        background-size: cover; /* Adjust how the background image is displayed */
        background-position: center; /* Center the background image */

    }

    /* content inside the left box */
.inside-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: large;
}  
</style>