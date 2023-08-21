<template>
    <div class="mainBackground1">
        <div class="mainStyle">
            <h1 class="heading1">What you wish to practice?</h1>
            <div class="card-structure">
                <CardModuleSelection 
                    cardHeading="Listnening" 
                    :imageSrc="listeningImage"
                    :link="ListningContentPath"
                />

                <CardModuleSelection 
                    cardHeading="Reading"
                    :imageSrc="readingImage"
                    :link="ReadingContentPath"
                />

                <CardModuleSelection 
                    cardHeading="Grammar"
                    :imageSrc="grammarImage"  
                    :link="GrammarContentPath"              
                />
            </div>
                       
        </div>
    </div>
</template>



<script>
import CardModuleSelection from "../components/CardModuleSelection.vue";
import listeningImage from "../assets/images/listening-vector.jpg";
import readingImage from "../assets/images/reading-vector.jpg";
import grammarImage from "../assets/images/grammar-vector.jpg";




export default {
    components:{
        CardModuleSelection,
    }, 

    data(){
        return{
            // needs to display images
            listeningImage: listeningImage,
            readingImage: readingImage,
            grammarImage: grammarImage,
        };
    },

    computed: {
        ListningContentPath() {
        return '/Basic/Listining/lesson1'; // Modify with your path that you given in the route.vue file under "path:" variable
        },
        ReadingContentPath() {
        return '/Basic/Reading/ReadingText1'; // Modify with your path that you given in the route.vue file  "path:" variable
        },
        GrammarContentPath() {
            return '/Basic/SelectGrammarLessons'; // Modify with your path that you given in the route.vue file under "path:" variable
        },
  },
};
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