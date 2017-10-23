<template>
	<div id="product-block">
		<div v-if="state.isNormal">
			<div class="banner" v-if="state.isBanner">
				<banner-lh :imgs="state.imgs"></banner-lh>
			</div>
			<div class="img" v-else>
				<img v-lazy="state.imgs[0].src"/>
				<span>{{state.imgs[0].text}}</span>
			</div>
			<sub-nav :hash="getHash()" :datas="datas"></sub-nav>
		</div>
		<div v-else>
			<img v-lazy="state.developmentImg"/>
		</div>
		<router-view/>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import banner from './tools/banner'
	import subNav from './tools/subNav'
	
	export default {
		name:"product",
		computed:{
			...mapState({
				datas: state => state.product.datas,
				state: state => state.product.state
			})
		},
		methods:{
			getHash(){
				return location.hash;
			}
		},
		components:{
			'banner-lh':banner,
			'sub-nav':subNav
		}
	}
</script>

<style lang="scss">
	#product-block{
		> div{
			> .banner{
				height: 600px;
			}
			> .img{
				position: relative;
				height: 480px;
				> img{
					height: 100%;
					width: 100%;
					object-fit: cover;
				}
				> span{
					position: absolute;
					left: 0;
					top: 50%;
					height: 80px;
					line-height: 80px;
					color: white;
					font-size: 48px;
					display: block;
					width: 100%;
					text-align: center;
					margin-top: -40px;
				}
			}
		}
	}
</style>