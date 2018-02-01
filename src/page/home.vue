<template>
    <div>
        <v-swiper :swiperItem="swiperList"></v-swiper>
        <ul class="link">
            <li class="link-item" v-for="(item,index) in linkTag" :key="index">
                <img :src="item.src">
                <p>{{item.name}}</p>
            </li>
        </ul>
        <div class="panel">
            <h3 class="panel-top">新手特权</h3>
            <div class="panel-con clearfix">
                <div class="panel-con-left">
                    <h3>下载APP<span>送888元礼包</span></h3>
                    <p>新手专享</p>
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100">
                </div>
                <ul class="panel-con-right">
                    <li class="clearfix">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200">
                        <div>
                            <p>领128元新手礼包</p>
                            <span>立即开通</span>
                        </div>
                    </li>
                    <li class="clearfix">
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100">
                        <div>
                            <p>打白条享免息</p>
                            <span>立即开通</span>
                        </div>
                    </li>
                </ul>
            </div>
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
                    '//img12.360buyimg.com/jrpmobile/jfs/t13465/324/2563794460/43029/3ffca963/5a421f83Ne8089231.jpg?width=750&height=320',
                    '//img12.360buyimg.com/jrpmobile/jfs/t13744/11/2508939408/43213/58bfe502/5a421ff3N52d0a474.jpg?width=750&height=320'
                ],
                linkTag:[
                    {
                        name:'优惠券',
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132'
                    },
                    {
                        name:'领红包',
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132'
                    },
                    {
                        name:'抢钢镚',
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132'
                    },
                    {
                        name:'领京豆',
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132'
                    },
                    {
                        name:'白条提额',
                        src:'//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135'
                    }
                ]
            }
        },
    }
</script>
<style lang="stylus">
    .link
        display flex
        justify-content space-around
        background #fff
        padding 0.4rem 0 0.2rem
        .link-item
            text-align center
            img
                width 1rem
                margin-bottom 0.05rem
    .panel
        background #fff
        margin-top 0.2rem
        .panel-top
            height 1.32rem
            text-align center
            line-height 1.32rem
            border-bottom 1px solid #ddd
        .panel-con
            width 100%
            height 3.4rem
            div
                width 50%
                &.panel-con-left
                    float left
                    height 100%
                    padding-top 0.4rem
                    text-align center
                    border-right 1px solid #ddd
                    box-sizing border-box
                    h3
                        font-size 0.3rem
                        span
                            color red
                    p
                        font-size 0.2rem
                        margin 10px 0
                    img
                        width 1.54rem
            .panel-con-right
                width 50%
                height 100%
                float left
                li
                    height 50%
                    padding 0 0.3rem
                    &:first-child
                        border-bottom 1px solid #ddd
                    img
                        float right
                        width 0.93rem
                        margin-top:0.3rem
                    div
                        margin-top:0.4rem
                        float left
                        p
                            width 2rem
                            font-size 0.3rem
                            color red
                            white-space nowrap;
                            text-overflow ellipsis;
                            overflow hidden;
                            margin-bottom 5px
                        span
                            color #999
                            font-size 0.3rem
</style>