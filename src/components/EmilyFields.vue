<template>
    <div class="my-5">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-3 my-5"
                    v-for="blog in blogs" :key="blog.id">
                            <div class="position-absolute">
                                <div class="bookmark-top ps-3 green"> {{ blog.day }}</div>
                                <div class="bookmark-top  p-1 pink"> {{ blog.month }}  {{ blog.year }}</div>
                                <div class="bookmark-bottom tr-left"></div>
                                <div class="bookmark-bottom tr-right"></div>
                            </div>
                        <div class="card" style="width: 18rem;">
                            <img class="img-fluid" :src="blog.src" alt="">
                            <div class="card-body my-2">
                                {{ blog.text }}
                                <div class="post-author">
                                <h6 class="mt-2">By {{blog.author}}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"EmilyFields",
    data(){
            return {
                blogs: [
                    {   id:1,
                        src:'./img/h-2-blog-img-1.jpg',
                        day:'07',
                        month:'May',
                        year:'\'19',
                        text:'This way, loves: a detailed guide through new design',
                        author:'Emily Fields'
                     },
                    {   id:2,
                        src:'./img/h-2-blog-img-2.jpg',
                        day:'07',
                        month:'May',
                        year:'\'19',
                        text:'I try to give people a different way of looking art',
                        author:'Emily Fields'
                     },
                    {   id:3,
                        src:'./img/h-2-blog-img-3.jpg',
                        day:'07',
                        month:'May',
                        year:'\'19',
                        text:'Introduce Richard Laperrière of those amazing features',
                        author:'Emily Fields'
                     },
                        ],
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
.col-3{
    position: relative;
}
.position-absolute {
        top: -20px;
        left: 20px;
        height: 300px;
        max-width: 60px;
        overflow: hidden;
        z-index: 2;
        .bookmark{
            width: 55px;
        }
        .green {
            background-color: $tertiary;
            height: 40px;
            font-weight: bold;
            font-style: italic;
            font-family:'Playfair Display';
            font-size: 1.3rem;
        }

        .pink {
            position: relative;
            background-color: $quaternary;
            height: 30px;
            font-size: 0.7rem;
            z-index: 1;
            font-weight: bold;
        }
        .bookmark-bottom{
            width: 75%;
            height: 20px;
            background-color: $quaternary;
        }
        .tr-left {
            position: absolute;
            top:72px;
            left: 0;
            transform: rotate(-30deg) translateY(-15px);
        }

        .tr-right {
            position: absolute;
            top:72px;
            right: 0;
            transform: rotate(30deg) translateY(-15px);
        }
    }
.card{
    border: 0px;

    .card-body{
        padding:0;
        font-weight: bold;
    }
    .img-fluid{
        transition: transform 400ms ease-in-out;
        &:hover {
            transform: scale(1.06);
        }
    }
    h6{
    font-family: 'Playfair Display';
    font-style: italic;
    }
}
</style>