<!-- tabs in the reading comprehension exercise 1 "Time to relax"-->
<template>
    <n-tabs type="segment">
      <n-tab-pane name="task1" tab="Task 1">
        <!-- Content of task 1 -->
        <h3>Match the questions with the answer. Put the corresponding number of the answer near the question.</h3>
        
        <!-- answers -->
        <table>
          <tr>
            <td><ButtonAnswer answer="1)  Tuesday"/></td>
            <td><ButtonAnswer answer="2)  comfortable"/></td>
            <td><ButtonAnswer answer="3)  four"/></td>
          </tr>

          <tr>
            <td><ButtonAnswer answer="4)  now"/></td>
            <td><ButtonAnswer answer="5)  2.00 p.m"/></td>
            <td><ButtonAnswer answer="6)  an email"/></td>
          </tr>
        </table>
        <br><br>

        <!-- questions -->
        <table>
          <tr>
            <td>1. Which day of the week does the Yoga class take place?</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>2. How many classes can you take for £10?</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>3. What time will the class end?</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>4. What kind of clothes do you need to where to the class?</td>
            <td><InputAnswer/></td>
          </tr>

          <tr>
            <td>5. What do you need to send to Sam if you want to join?</td>
            <td><InputAnswer/></td>
          </tr>
        </table>

        <br>
        <div class="center-item">
          <ButtonCheck/>
        </div>
      </n-tab-pane>





      <!-- task 2 tab -->
      <n-tab-pane name="task2" tab="Task 2">
        <h3>Decide whether the given statements are true or false</h3>

        <table class="td-style">
          <tr>
            <td>1. Sam Holden is the Yoga teacher</td>
            <td><RadioTrueFalse/></td>
          </tr>

          <tr>
            <td>2. The Yoga class is once a week</td>
            <td><RadioTrueFalse/></td>
          </tr>

          <tr>
            <td>3. The class is at lunch time in room 7</td>
            <td><RadioTrueFalse/></td>
          </tr>

          <tr>
            <td>4. You need to bring yoga mats to the class</td>
            <td><RadioTrueFalse/></td>
          </tr>

          <tr>
            <td>5. The class cannot take 22 people</td>
            <td><RadioTrueFalse/></td>
          </tr>
        </table>

        <br>
        <div class="center-item">
          <ButtonCheck/>
        </div>
      </n-tab-pane>
    </n-tabs>
</template>



<script>
import ButtonAnswer from "./ButtonAnswer.vue"
import InputAnswer from "./InputAnswer.vue"
import ButtonCheck from "./ButtonCheck.vue"
import RadioTrueFalse from "./RadioTrueFalse.vue"



export default{
  components:{
    ButtonAnswer, InputAnswer, ButtonCheck, RadioTrueFalse,
  }
}

</script>


<style scoped>
 .center-item{
  text-align: center;
 }

 /* add padding only to a selected table's td */
 .td-style td {
  padding: 25px;
}

</style>