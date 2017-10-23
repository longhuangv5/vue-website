<template>
	<div id="introduce-block">
		<div class="title-block">
			<img :src="datas.textImg"/>
			<span>{{datas.title}}</span>
		</div>
		<div class="block-1">
			<img v-lazy="datas.img1" />
			<div>
				<h5>{{datas.name1}}</h5>
				<p v-for="c in datas.content1">{{c}}</p>
			</div>
		</div>
		<div class="block-2">
			<img v-lazy="datas.img2" />
			<div>
				<p v-for="c in datas.content2">{{c}}</p>
			</div>
		</div>
		<div class="block-3">
			<div :style="{'background-image': 'url('+datas.img3+')'}">
				<h5>{{datas.name2}}</h5>
				<p v-for="c in datas.content3">{{c}}</p>
			</div>
			<img v-lazy="datas.img4" />
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		name:'introduce',
		computed:{
			...mapState({
				datas: state => state.main.introduce.datas
			})
		}
	}
</script>

<style lang="scss">
	#introduce-block{
		width: 1200px;
		margin: 0 auto 80px;
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
		> div.block-1{
			height: 508px;
			overflow: hidden;
			> img{
				float: left;
				height: 100%;
				width: 48.5%;
				object-fit: cover;
			}
			> div{
				position: relative;
				float: right;
				height: 100%;
				width: 48.5%;
				background-color: #d52836;
				padding: 40px;
				> h5{
					margin: 0;
					padding: 10px 0;
					font-size: 28px;
					color: white;
					font-weight: 100;
				}
				> p{
					font-size: 14px;
					line-height: 1.6em;
					color: white;
					padding-bottom: 40px;
					padding-right: 80px;
				}
				&:after{
					position: absolute;
					content: '';
					width: 20px;
					height: 20px;
					background-color: #d52836;
					transform: rotate(45deg);
					-webkit-transform: rotate(45deg);
					left: -9px;
					top: 62px;
				}
			}
		}
		> div.block-2{
			margin-top: 30px;
			height: 529;
			overflow: hidden;
			> img{
				float: left;
				width: 284px;
				height: 100%;
				object-fit: cover;
			}
			> div{
				overflow: hidden;
				padding: 20px;
				> p{
					font-size: 14px;
					color: #333333;
					padding: 20px;
				}
			}
		}
		> div.block-3{
			margin-top: 30px;
			height: 529px;
			overflow: hidden;
			> div{
				height: 100%;
				width: 70%;
				float: left;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 100% 100%;
				padding: 20px;
				> h5,p{
					color: #cccccc;
					font-size: 14px;
					margin: 0;
					padding: 20px 30px;
					line-height: 1.8em;
				}
			}
			> img{
				float: right;
				width: 28%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>