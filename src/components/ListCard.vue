<template>
    <div class="col">
        <div  class="pt-2 pb-5 text-center">
            <div class="square m-auto d-flex align-items-center justify-content-center" 
                :style="{color: color}">
                <FontAwesomeIcon 
                :icon="icon"
                />
            </div>
            <div class="my-card-title py-3">
                {{title}}
            </div>
            <div class="my-card-text text-muted">
                {{text}}
            </div>                    
        </div>
    </div>
</template>
<script>
export default {
    props:{
        icon:String,
        color:String,
        title:String,
        text:String
    }
}
</script>
<style lang="scss" scoped>
    .square {
        width: 140px;
        aspect-ratio: 1 / 1;
        background-color: rgb(250, 247, 241);
        border-radius: 50%;
        position: relative;
        z-index: 1;
        font-size: 2rem;
    }

    .my-card-text {
        font-size: .7rem;
        position: relative;
        z-index: 2;
    }

    .my-card-title {
        position: relative;
        z-index: 2;
    }
</style>