<template>
	<div>
		<book :data="bookInfo" @addbookNum="clog"/>
	</div>
</template>

<script setup>
import book from '../../myAPP/src/components/book.vue'
import { reactive } from 'vue'
let bookInfo= reactive({
	bookName:'战争与和平',
	bookPrice:178.5,
	bookAuthor:'列夫·托尔斯泰',
	bookNum:0
})
function clog(data) {
	bookInfo.bookNum +=data
}
</script>

<style>

</style>