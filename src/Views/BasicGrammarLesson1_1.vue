<template>
    <div class="page-style">  
         <CardMiddle/>
    </div>

</template>

<script>
import CardMiddle from '../components/CardMiddle.vue'

export default {
    components:{
        CardMiddle
    }
}
</script>

<style scoped> 
    .page-style{
        display: flex;
        justify-content: center;
        align-items: center; /* For vertical alignment */
        height: 100vh; /*Adjust the height as needed. This locates the box properly */
    }
</style>