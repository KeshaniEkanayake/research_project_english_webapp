<template>
  <div class="mainStyle">
    <h1>What you wish to practice?</h1>

    <table>
        <tr>
            <td>
                <CardListeningModule/>
            </td>
            <td>
                <CardReadingModule/>
            </td>
        </tr>
    </table>
       
        
       
   
  </div>
</template>



<script>
import CardListeningModule from "../components/CardListeningModule.vue";
import CardReadingModule from "../components/CardReadingModule.vue";

export default {
    components:{
        CardListeningModule,
        CardReadingModule,
    }
}
</script>
    


<style scoped>
    .mainStyle{
       display: flex;
       flex-direction: column; 
    }

</style>