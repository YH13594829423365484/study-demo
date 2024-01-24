<template>
	<div>
		<text>书名:{{ data.bookName }}</text>
		<text>作者:{{ data.bookAuthor }}</text>
		<text>价格:{{ data.bookPrice }}</text>
		<text>数量:{{ data.bookNum }}</text>
		<br>
		<button @click="addbookNum">图书数量加1</button>
	</div>
</template>

<script setup>
defineProps({
	data: Object
})
const emit = defineEmits(['addbookNum']);
const addbookNum=()=> {
	emit('addbookNum', 1)
}
</script>
   
<style lang="lcss">

</style>
