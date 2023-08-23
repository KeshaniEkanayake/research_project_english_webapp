<!-- large card component with 3 proficiency level buttons  -->
<template>
    <n-space>
        <n-card size="huge" class="card-style">
            <!-- buttons to select different proficiency levels -->
            <ButtonBasicProfLevel/>
            <br>             
            <ButtonIntermediateProfLevel/>
            <br>
            <ButtonAdvancedProfLevel/>
        </n-card>
    </n-space>
</template>



<script>
    //   related to components
    import { defineComponent } from "vue"; 
    import ButtonBasicProfLevel from "../components/ButtonBasicProfLevel.vue"
    import ButtonIntermediateProfLevel from "../components/ButtonIntermediateProfLevel.vue"
    import ButtonAdvancedProfLevel from "../components/ButtonAdvancedProfLevel.vue"

    export default defineComponent({
        components:{
            ButtonBasicProfLevel,
            ButtonIntermediateProfLevel,
            ButtonAdvancedProfLevel
        },
    });
</script>


<style scoped>
    .card-style{
        border-radius: 1.25rem;
    }
</style>
