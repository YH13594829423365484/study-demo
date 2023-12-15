<template>
    <div ckass="home">
        <h2>这是首页</h2>
        <nav>
            <router-link to="/suggest">推荐</router-link>
            <router-link to="/newest">最新</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>

nav a{
    margin-left: 20px;
}

</style>