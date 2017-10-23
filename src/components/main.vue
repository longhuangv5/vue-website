<template>
	<div id="main-block">
		<img :src="mainData.titleImg" />
		<sub-menu :hash="getPath()" :datas="mainData"></sub-menu>
		<router-view/>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import subNav from './tools/subNav'

	export default {
		name: 'main',
		data() {
			return {}
		},
		computed:{
			...mapState({
				mainData: state => state.main.datas
			})
		},
		methods: {
			getPath(){
				return location.hash;
			}
		},
		components:{
			'sub-menu':subNav
		}
	}
</script>

<style lang="scss">
	#main-block {
		>img {
			width: 100%;
			height: 110px;
			object-fit: cover;
		}
	}
</style>