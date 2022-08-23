<template>
    <div class="h-100 position-relative m-auto">
        <img class="woman" src="../assets/img/h-2-slider-img-15.png" alt="">
        <img class="man" src="../assets/img/h-2-slider-img-16.png" alt="">
        <img class="left-top" src="../assets/img/short-slider-rev-1-img-2.png" alt="">
        <img class="left-middle" src="../assets/img/h-2-slider-img-12.png" alt="">
        <img class="left-bottom" src="../assets/img/h-2-slider-img-13.png" alt="">
        <img class="right-top" src="../assets/img/h-2-slider-img-14.png" alt="">
        <img class="right-middle" src="../assets/img/short-slider-rev-1-img-6.png" alt="">
        <img class="right-bottom" src="../assets/img/h-2-slider-img-17.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'JumboImage'
    }
</script>

<style lang="scss" scoped>
    img {
        position: absolute;
    }

    .position-relative {
        min-height: 297px;
        max-height: 300px;
        min-width: 510px;
        max-width: 520px;
    }
    .woman {
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
    }

    .man {
        top: 0;
        bottom: 0;
        right: 13%;
        height: 100%;
    }

    .right-bottom{
        bottom: 0;
        right: 0;
        width: 10%;
    }

    .right-middle {
        width: 5%;
        right: 20%;
        top: 18%
    }

    .right-top {
        width: 8%;
        top: -20%;
        right: 20%;
    }

    .left-bottom {
        width: 8%;
        bottom: 0;
        left: -10%;
    }

    .left-middle {
        width: 6%;
        top: 45%;
        left: -17%;
    }

    .left-top {
        width: 5%;
        top: -4%;
    }
</style>