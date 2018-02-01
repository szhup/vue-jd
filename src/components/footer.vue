<template>
    <div class="footer">
        <ul class="client">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108">
                <p>客户端</p>
            </li>
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108">
                <p>触屏版</p>
            </li>
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108">
                <p>电脑版</p>
            </li>
        </ul>
        <p class="copyright">Copyright © 2004-2017 京东JD.com 版权所有</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'hello vue'
            }
        },
    }
</script>
<style lang="stylus">
    .client
        padding 0.2rem 0
        margin-top 0.2rem
        background #fff
        display flex
        justify-content space-around
        align-items center
        li
            img
                width 1rem
            p
                margin-top 5px
                font-size 0.3rem
    .copyright
        background #fff
        line-height 1rem
        text-align center
        border-top 1px solid #ddd
        font-size 0.3rem
</style>