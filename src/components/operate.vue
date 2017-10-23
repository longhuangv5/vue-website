<template>
	<div id="operate-block">
		<img :src="datas.titleImg" />
		<sub-menu :hash="getPath()" :datas="datas"></sub-menu>
		<router-view/>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import subNav from './tools/subNav'
	
	export default {
		name:'operate',
		computed:{
			...mapState({
				datas: state => state.operate.datas
			})
		},
		methods:{
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
	#operate-block{
		> img{
			width: 100%;
			height: 110px;
			object-fit: cover;
		}
	}
</style>