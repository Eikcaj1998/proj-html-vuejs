<template>
    <div class="py-1">
        <div class="row row-cols-3 g-0">
            <div v-for="pic in pictures" :key="pic.src" class="col">
                <div class="position-relative h-100 overflow-hidden">
                    <img :src="pic.src" alt="">
                    <div class="hover-text p-4">
                    <h4>{{pic.text}}</h4>
                    <h6>{{pic.italic}}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'ImageSection',
        data(){
            return {
                pictures: [
                    {src:'./img/h-2-port-img-1.jpg',
                     text:'Illustration of novel',
                     italic:'illustration'
                     },
                    {src:'./img/h-2-port-img-2.jpg',
                     text:'Illustration of novel',
                     italic:'illustration'
                     },
                    {src:'./img/h-2-port-img-3.jpg',
                     text:'Illustration of novel',
                     italic:'illustration'
                     },
                    {src:'./img/h-2-port-img-4.jpg',
                     text:'Illustration of novel',
                     italic:'illustration'
                     },
                    {src:'./img/h-2-port-img-5.jpg',
                     text:'Illustration of novel',
                     italic:'illustration'
                     },
                    {src:'./img/h-2-port-img-6.jpg',
                     text:'Illustration of novel',
                     italic:'illustration'},
                        ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    img {
        width: 100%;
    }

    .position-relative:hover {

            .hover-text {
                transform: translate(0, -50%);
                opacity: 1;
                h6{
                    font-family: 'Playfair Display';
                    font-style: italic;
                }
            }
        }

    .hover-text {
        background-color: white;
        width: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-100%, -50%);
        transition: transform 400ms;
        overflow: hidden;
    }
</style>