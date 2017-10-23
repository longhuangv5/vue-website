<template>
	<div id="information-block">
		<img class="first" v-if="mainData.type == 1" :src="mainData.titleImg" />
		<img class="last" v-else :src="mainData.titleImg2" />
		<sub-menu :hash="getPath()" :datas="mainData"></sub-menu>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"/>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"/>
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
				mainData: state => state.information.datas
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
	#information-block {
		>img {
			width: 100%;
			object-fit: cover;
			&.first{
				height: 240px;
			}
			&.last{
				height: 110px;
			}
		}
	}
</style>