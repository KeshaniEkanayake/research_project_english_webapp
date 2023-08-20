<!-- this card component contains an image and a text related to a reaading comprehension question 1 -->
<template>
    <n-card title="Time to Relax">
      <template #cover>
        <img src="../assets/images/images-in-questions/reading1.jpg" class="image-style">
        </template>
            Come and join our lunchtime yoga class with experienced yoga teacher Divya Bridge!
            When? Every Tuesday at 1.30 p.m.
            Where? Meeting Room 7
            How much? £10 for four 30-minute classes.
            What to bring? Comfortable clothes. Divya will provide the yoga mats.
            How to join? Write to Sam at Sam.Holden@example.com
            We can only take a maximum of 20 in the room, so book now!
    </n-card>
  </template>
  
  <style scoped>
  .n-card {
    max-width: 50%;
    border-radius: 1.25rem;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
  }

  .image-style{
    border-radius: 1.25rem;
  }
  </style>