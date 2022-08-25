<template>
    <div class="background-img">
        <div class="container">
        <div class="row d-flex align-items-center text-center h-400">
            <div class="col">
                <h2 class="mb-3">Want to work with us? Send us <span>a message!</span></h2>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officia possimus consequuntur nisi, nemo harum quasi tempore sapiente deleniti cumque. Quo iusto aliquid voluptate. Odit illo eius laboriosam explicabo corporis!</p>
                <button type="button" class="btn">CONTACT</button>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ContactUs'
    }
</script>

<style lang="scss" scoped>

@import '../assets/style.scss';
    .background-img {
        background-image:url(../assets/img/h-2-background-1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
    }
    .h-400{
        height: 400px;
    }
    h2 {
        font-size: 3rem;

        span {
            font-style: italic;
            font-weight: bold;
            font-family: 'Playfair Display'
        }
    }

    .btn{
        font-size: 0.8rem;
        width: 159px;
        padding: 20px;
        background-color: $primary;
        border-radius: 0;
        &:hover {
            background-color: $secondary;
            color: white;
        }
}
</style>