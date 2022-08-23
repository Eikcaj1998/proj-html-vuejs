<template>
    <div>
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
    }
</script>

<style lang="scss" scoped>
ul{
    list-style-type: none;
}
</style>
