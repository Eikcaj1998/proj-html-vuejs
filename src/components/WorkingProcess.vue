<template>
    <div class="pt-3 pb-5">
        <div class="container">
            <h2 class="text-center py-5">Working <span>process</span></h2>
                <div class="w-75 m-auto position-relative">
                    <div class="row row-cols-4">
                    <img class="line" src="../assets/svg/svg-3.svg" alt="">
                        <ListCard 
                        v-for="(card) in cards" 
                            :key="card.id"
                            :icon="card.icon"
                            :color="card.color"
                            :title="card.title"
                            :text="card.text"/>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import ListCard from "./ListCard.vue";
export default {
    name:'WorkingProcess',
    components:{ListCard,},
    data: function () {
    return {
    cards:[
        {   
            id:1,
            icon:'fa-solid fa-lightbulb',
            color:'#BADAC9',
            title:'First there\'s an idea',
            text:'Lorem ipsum dolor sit, conetu adipisc sed be et aliqua pleasure itself.'
        },
        {   
            id:2,
            icon:'fa-regular fa-comment',
            color:'#F8D12D',
            title:'Then we talk about',
            text:'Lorem ipsum dolor sit, conetu adipisc sed be et aliqua pleasure itself.'
        },
        {   
            id:3,
            icon:'fa-solid fa-cloud',
            color:'#80465F',
            title:'And we think about',
            text:'Lorem ipsum dolor sit, conetu adipisc sed be et aliqua pleasure itself.'
        },
        {   
            id:4,
            icon:'fa-solid fa-pencil',
            color:'#EB6950',
            title:'So we draw along',
            text:'Lorem ipsum dolor sit, conetu adipisc sed be et aliqua pleasure itself.'
        },
    ]
    }
    }
}

</script>
<style lang="scss" scoped>
    .my-position-absolute {
        position: absolute;
        top: 0;
        right: 8%;
        bottom: 0;
        left: 8%;
    }
    .line{
        width: 800px;
        height: 90px;
        z-index: 0;
        position: absolute;
        top:15px;
        left: 70px;
    }

    h2 {
        font-size: 3rem;

        span {
            font-family:'Playfair Display';
            font-weight: bold;
            font-style: italic;
        }
    }
</style>