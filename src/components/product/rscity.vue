<template>
</template>

<script>
	export default {
		name: 'rscity',
		created:function(){
			this.$store.commit('product/isNormal', false);
		}
	}
</script>

<style>
</style>