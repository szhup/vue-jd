<template>
    <div>
        <v-swiper :swiperItem="swiperList"></v-swiper>
        <div class="middle">
            我是理财内容
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
    import swiperCon from '../components/swiper'
    import footer from '../components/footer'
    export default {
        components:{
            'v-swiper':swiperCon,
            'v-footer':footer
        },
        data() {
            return {
                swiperList:[
                    '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400',
                    '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
                ]
            }
        },
    }
</script>
<style lang="stylus">
    .middle
        height 5rem
        text-align center
        line-height 5rem
        font-size 0.8rem
        color red
</style>