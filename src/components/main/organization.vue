<template>
	<div id="organization-block">
		<div class="title-block">
			<img :src="datas.textImg"/>
			<span>{{datas.title}}</span>
		</div>
		<img v-lazy="datas.img" />
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		name:'organization',
		computed:{
			...mapState({
				datas: state => state.main.organization.datas
			})
		}
	}
</script>

<style lang="scss">
	#organization-block{
		width: 1200px;
		margin: 0 auto 80px;
		text-align: center;
		> div.title-block{
			text-align: center;
			padding: 60px 0;
			> img{
				height: 52px;
			}
			> span{
				font-size: 24px;
				color: #d52836;
				padding: 0 10px;
				vertical-align: bottom;
			}
		}
		> img{
			max-width: 100%;
		}
	}
</style>