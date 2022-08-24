<template>
    <div class="pt-3 pb-5">
        <div class="container">
            <h2 class="text-center py-5">Working <span>process</span></h2>
                <div class="w-75 m-auto position-relative">
                    <div class="row row-cols-4">
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
            title:'First there\'s an idea',
            text:'Lorem ipsum dolor sit, conetu adipisc sed be et aliqua pleasure itself.'
        },
        {   
            id:3,
            icon:'fa-solid fa-cloud',
            color:'#80465F',
            title:'First there\'s an idea',
            text:'Lorem ipsum dolor sit, conetu adipisc sed be et aliqua pleasure itself.'
        },
        {   
            id:4,
            icon:'fa-solid fa-pencil',
            color:'#EB6950',
            title:'First there\'s an idea',
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

    h2 {
        font-size: 3rem;

        span {
            font-family:'Playfair Display';
            font-weight: bold;
            font-style: italic;
        }
    }
</style>