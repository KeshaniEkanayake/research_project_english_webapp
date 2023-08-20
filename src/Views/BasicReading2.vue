<template>
  <div class="mainBackground1">
    <div class="page-structure"> 
      <!-- left part with the image and the reading text -->
      <CardReadingText 
          :cardTitle="cardTitle"
          :imageSrc="readingTextImage"
          :readingText="readingText"
        />



        <!-- right part with quesitons -->
        <div class="box-right">
          <!-- tabs to select the task -->
          <TabsReading1/>
        </div>
    </div>
  </div>
</template>




<script>
import CardReadingText from "../components/CardReadingText.vue"
import TabsReading1 from "../components/TabsReading1.vue"
import readingTextImage from "../assets/images/images-in-questions/reading1.jpg";



export default {
    components:{
        CardReadingText, TabsReading1,
    },

    data(){
        return{
            cardTitle: "Time to Relax", 

            // needs to display image in the card
            readingTextImage: readingTextImage,

            // dynamically adding a related reading text to the card
            readingText:`Come and join our lunchtime yoga class with experienced yoga teacher Divya Bridge!
            When? Every Tuesday at 1.30 p.m.
            Where? Meeting Room 7
            How much? £10 for four 30-minute classes.
            What to bring? Comfortable clothes. Divya will provide the yoga mats.
            How to join? Write to Sam at Sam.Holden@example.com
            We can only take a maximum of 20 in the room, so book now!`,            
        };
    },
}
</script>

<style>
@import url(../assets/CSS/cssFile.css);


  .page-structure{
      display: flex;
      /* keep a gap between 2 boxes */
      gap: 20px;
      justify-content: center;
      /* For vertical alignment */
      align-items: stretch; /* Align items with the same height */ 
      padding: 10px;
        
  }


  /* white box in the right of the page */
  .box-right {
            width: 50%;
            border-radius: 1.25rem;
            background: #FFF;
            box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
            padding: 15px;
  }
</style>