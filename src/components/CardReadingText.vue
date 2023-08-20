<!-- this card component contains an image and a text related to a reaading comprehension question 1 -->
<template>
    <n-card>
      <template #cover>
        <img :src="imageSrc" class="image-style">
        </template>
          <h2>{{cardTitle}}</h2>
            <p class="para-style"> {{ readingText }}</p>
            <!-- Come and join our lunchtime yoga class with experienced yoga teacher Divya Bridge!
            When? Every Tuesday at 1.30 p.m.
            Where? Meeting Room 7
            How much? £10 for four 30-minute classes.
            What to bring? Comfortable clothes. Divya will provide the yoga mats.
            How to join? Write to Sam at Sam.Holden@example.com
            We can only take a maximum of 20 in the room, so book now! -->
    </n-card>
  </template>
  


<script>
  export default({
    props: {

      cardTitle:{
        type: String,

      },

      readingText:{
        type: Text,
        required: true,
      },

      // used to add an image dynamically to the card
      imageSrc: {
              type: String,
              required: true, // Make the prop required
      },
    }
  })
</script>



<style scoped>
  .n-card {
    max-width: 40%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .image-style{
    border-radius: 1.25rem;
  }

  .para-style{
    color: black;
    /* used to keep linebreaks and spaces as typed inside data() */
    white-space: pre-line;
    text-align: center;
  }
  </style>