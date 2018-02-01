<template>
    <div class="header">
        <div class="sign">
            <a href="javascript:;">注册</a>丨<a href="javascript:;">登录</a>
        </div>
        <a class="down" href="javascript:;">APP下载</a>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>
<style lang="stylus" scoped>
    @import "../common/mixin.styl"
    .header
        width 100%
        display flex
        align-items center
        justify-content space-between
        background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png)no-repeat center center ;
        background-size auto 50%
        padding 0 0.3rem
        position fixed
        left 0
        top 0
        z-index 9
        .sign
            height 1rem
            line-height 1rem
            a
                font-size 0.3rem
                color #666
        .down
            width: 1.4rem
            height: 0.65rem
            background #F04752
            color #fff
            font-size 0.3rem
            text-align center
            line-height 0.65rem
            border-radius 0.1rem
</style>