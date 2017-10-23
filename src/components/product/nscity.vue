<template>
</template>

<script>
	export default {
		name: 'nscity',
		created:function(){
			this.$store.commit('product/isNormal', false);
		}
	}
</script>

<style>
</style>