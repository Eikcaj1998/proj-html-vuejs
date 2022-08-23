<template>
    <div class="py-5">
    <div class="container">
        <div class="row">
        <div class="text col-6">
            <h1>Devotion that never <span>ends</span></h1>
            <p class="py-3">Nesque porro quisquantum est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            <button type="button" class="btn">READ MORE</button>
        </div>
        <div class="col-6">
        <JumbotronImgs/>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import JumbotronImgs from "./JumbotronImgs.vue";
export default {
    name:'JumboTron',
    components:{
    JumbotronImgs,
}
}
</script>
<style lang="scss" scoped>
@import '../assets/style.scss';
    .row{
        padding-top: 40px;
    }
    .btn{
        font-size: 0.8rem;
        width: 159px;
        padding: 20px;
        border-radius: 0px;
        border: solid 3px $secondary;
        &:hover {
            background-color: $secondary;
            border-color: $secondary;
            color: white;
        }
    }
    span{
        font-family: 'Playfair Display';
        font-style: italic;
        font-weight: bold;
        font-size: 48px;

    }
</style>