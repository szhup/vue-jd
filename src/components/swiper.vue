<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in swiperItem" :key="index">
                <img class="swiper-img" :src="item">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        name: 'carrousel',
        props:{
            swiperItem:{
                type:Array,
                default:function(){
                    return []
                }
            }
        },
        created(){

        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // this.swiper.slideTo(2, 1000, false)
        }
    }
</script>
<style lang="stylus">
    @import 'swiper/dist/css/swiper.css'
    .swiper-img
        width 100%
</style>