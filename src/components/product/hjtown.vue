<template>
</template>

<script>
	export default {
		name: 'hjtown',
		created:function(){
			this.$store.commit('product/isNormal', false);
		}
	}
</script>

<style>

</style>