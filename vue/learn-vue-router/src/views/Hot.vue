<template>
    <div>
        <h2>沸点页面</h2>
        <button @click="goClassPage">去课程页面</button>
    </div>
</template>

<script>
    export default {
        methods: {
            goClassPage(){
                // this.$router.push('/class') //路由传参
                // this.$router.push({path: '/class',query: {id:123}})
                this.$router.push({name:'class',params:{id:456}});
            }
        }
    }
</script>

<style lang="css" scoped>

</style>