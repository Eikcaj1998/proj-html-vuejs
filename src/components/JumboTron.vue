<template>
    <div class="py-5">
    <div class="container">
        <div class="row">
        <div class="text col-6">
            <h1>Devotion that never <span>ends</span></h1>
            <p class="py-3">Nesque porro quisquantum est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi.</p>
            <button type="button" class="btn p-3 secondary">READ MORE</button>
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
    .row{
        padding-top: 40px;
    }
</style>