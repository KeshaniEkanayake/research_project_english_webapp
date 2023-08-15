<template>
    <div class="mainBackground1">
        <div class="mainStyle">
            <h1 class="heading1">What you wish to practice?</h1>
            <div class="card-structure">
                <CardListeningModule cardHeading="Listnening"/>
                <CardListeningModule cardHeading="Reading"/>
                <CardListeningModule cardHeading="Grammar"/>
            </div>
                       
        </div>
    </div>
</template>



<script>
import CardListeningModule from "../components/CardListeningModule.vue";
// import CardReadingModule from "../components/CardReadingModule.vue";
// import CardGrammarModule from "../components/CardGrammarModule.vue";

export default {
    components:{
        CardListeningModule,
        // CardReadingModule,
        // CardGrammarModule,
    }
}
</script>
    


<style scoped>
/* used to add the background image */
@import url(../assets/CSS/cssFile.css);

/* display the heading and the card set as i column */
    .mainStyle{
       display: flex;
       flex-direction: column; 

       align-items: center;

        /* get all the elements located in the middle(vertically and horizontally) */
        /* justify-content: center; */
    }

    .card-structure{
        /* display cards as a row --- */
        display: flex;
        /* add gaps between 2 cards */
        gap: 20px;
    }

</style>