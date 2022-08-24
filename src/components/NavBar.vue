<template>
    <div>
        <nav class="navbar py2 px-3">
        <div class="container-fluid">
        <a class="go-top" @click="scrollToTop()">
        <FontAwesomeIcon icon="fa-solid fa-arrow-up" class="arrow"/>
        </a>
        <div class="d-flex justify-content-between align-items-center">
        <a href="#">
        <img src="../assets/img/logo-sidearea-1.png" alt="logo"></a>
        </div>
            <ul class="d-flex">
            <li v-for="link in links" :key="link" class="px-4 py-1">
                    <a class="nav-link text-black" href="#">{{link}}</a>
            </li>
            <li>
            <img src="../assets/svg/svg-1.svg" alt="">
            </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:'NavBar',
    data() {
        return {
            links:[
                'HOME', 
                'PAGES',
                'PORTFOLIO',
                'BLOG',
                'SHOP',
                'ELEMENTS'
                ]
        }
    },
    methods: { 
           scrollToTop() {
                window.scrollTo(0,0);
           }
        } 
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
    .go-top {
        position: fixed;
        bottom: 3vh;
        right: 3vh;
        z-index:1;
        width: 40px;
        height: 40px;
        background-color: $primary;
        box-shadow: 3px 3px 3px #dedede;
        .arrow{
            width: 20px;
            height: 20px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            }
        }
ul{
    list-style-type: none;
}
</style>
