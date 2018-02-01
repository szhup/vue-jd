<template>
    <div id="app">
        <v-header></v-header>
        <router-view class="wrap-box"></router-view>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import header from './components/header'
    import tabBar from './components/tabBar'
    export default {
        name: 'App',
        components: {
            'v-header': header,
            'tab-bar': tabBar
        }
    }
</script>

<style lang="stylus">
    @import "common/base.styl";
    .wrap-box
        width 100%
        margin 1.2rem 0 1.4rem
</style>
