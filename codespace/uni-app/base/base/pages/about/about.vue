<template>
	<view>
		about page
	</view>
</template>

<script setup>
import { onMounted } from 'vue';

	onMounted(()=>{
		const req=uni.request({
			url:'https://mock.mengxuegu.com/mock/65a9154ec4cd67421b34c8b9/movie/movieList',
			method:'GET'
		}).then(res => {
			console.log(res);
		}
	})
</script>

<style lang="scss">

</style>