<template>
    <div class="tab">
        <ul class="tab-list">
            <li class="tab-list-item" :class="{'active':tabType==1}">
                <router-link to="home" class="link-block">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&amp;height=66">
                    <p>首页</p>
                </router-link>
            </li>
            <li class="tab-list-item" :class="{'active':tabType==2}">
                <router-link to="licai" class="link-block">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66">
                    <p>理财</p>
                </router-link>
            </li>
            <li class="tab-list-item" :class="{'active':tabType==3}">
                <router-link to="bai" class="link-block">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66">
                    <p>白条</p>
                </router-link>
            </li>
            <li class="tab-list-item" :class="{'active':tabType==4}">
                <router-link to="zhong" class="link-block">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66">
                    <p>众筹</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tabType: 1
            }
        },
        methods:{

        }
    }
</script>
<style scoped lang="stylus">
    .tab
        width 100%
        position fixed
        bottom 0
        left 0
        background #fff
        .tab-list
            width 100%
            height 1.2rem
            display flex
            align-items center
            justify-content space-around
            .tab-list-item
                text-align center
                a
                    display block
                    &.router-link-active
                        color red
                    img
                        width 0.5rem
                    p
                        margin-top 5px
</style>