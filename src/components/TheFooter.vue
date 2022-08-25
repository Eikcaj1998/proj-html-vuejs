<template>
    <footer class="py-5 primary">
        <div class="container">
            <div class="row row-cols-4 align-items-center">
                <div class="col">
                    <img class="mb-2" src="img/logo-sidearea-1.png" alt="">
                    <div class="fs-7">Let's Get Creative</div>
                </div>
                <div class="col">
                    <div class="fs-7 mb-2">maree.qode@gmail.com</div>
                    <div class="fs-7">+44645 321 789</div>
                </div>
                <div class="col">
                    <div class="fs-7 mb-2">Avenue d'Auderghem 10</div>
                    <div class="fs-7">1040 Brussels, Belgium</div>
                </div>
                <div class="col">
                    <div class="fs-7 mb-2">Stay in touch with us</div>
                    <div class="d-flex w-75">
                        <div class="px-2">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" />
                        </div>
                        <div class="px-2">
                            <FontAwesomeIcon icon="fa-brands fa-pinterest" />
                        </div>
                        <div class="px-2">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" />
                        </div>
                        <div class="px-2"><FontAwesomeIcon icon="fa-brands fa-linkedin" /></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'TheFooter'

    }
</script>

<style lang="scss" scoped>
    @import '../assets/style.scss';
    .primary{
        background-color: $primary;
    }
    .fs-7 {
        font-size: 0.8rem;
    }
</style>