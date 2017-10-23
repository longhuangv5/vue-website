<template>
	<div id="operate-child-block">
		<div class="title-block">
			<img :src="datas[type].textImg"/>
			<span>{{datas[type].title}}</span>
		</div>
		<div class="block-1">
			<img v-lazy="datas[type].img1"/>
			<div>
				<h3>{{datas[type].name1}}</h3>
				<p>{{datas[type].content1}}</p>
			</div>
		</div>
		<div class="block-2">
			<div class="left">
				<img v-lazy="datas[type].img2" />
				<h3>{{datas[type].name2}}</h3>
				<p>{{datas[type].content2}}</p>
			</div>
			<div class="center">
				<img v-lazy="datas[type].img3" />
				<h3>{{datas[type].name3}}</h3>
				<p>{{datas[type].content3}}</p>
			</div>
			<div class="right">
				<img v-lazy="datas[type].img4" />
				<h3>{{datas[type].name4}}</h3>
				<p>{{datas[type].content4}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'operate_child',
		data() {
			return {
				type: undefined
			}
		},
		computed:{
			datas(){
				return this.$store.state.operate.operateChild.datas;
			}
		},
		created: function() {
			this.type = this.$route.params.type;
		},
		watch: {
			'$route' (to, form) {
				this.type = to.params.type;
			}
		}
	}
</script>

<style lang="scss">
	#operate-child-block{
		width: 1200px;
		margin: 0 auto;
		> .title-block{
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
		> .block-1{
			position: relative;
			height: 528px;
			overflow: hidden;
			> img{
				float: right;
				height: 100%;
				width: 64.5%;
				object-fit: cover;
			}
			> div{
				position: absolute;
				width: 55%;
				top: 15%;
				left: 0;
				> h3{
					margin: 0;
					padding: 20px 40px;
				}
				> p{
					padding: 30px 100px 0 40px;
					height: 233px;
					background: linear-gradient(to left, rgba(255,0,0,.4), rgba(213,40,54,1));
					margin: 0;
					font-size: 14px;
					color: white;
					line-height: 1.6em;
				}
			}
		}
		> .block-2{
			margin-top: 30px;
			overflow: hidden;
			text-align: center;
			> div{
				display: inline-block;
				width: 31%;
				> img{
					width: 100%;
					height: 264px;
					object-fit: cover;
				}
				> h3{
					text-align: center;
					position: relative;
					margin: 0;
					padding: 30px 0;
					&:after{
						position: absolute;
						content: '';
						width: 38px;
						height: 2px;
						background-color: #d52836;
						left: 50%;
						margin-left: -19px;
						bottom: 0;
					}
				}
				> p{
					padding: 10px 20px;
					font-size: 14px;
					color: #666;
					line-height: 1.8em;
					text-align: left;
				}
				&.left{
					float: left;
				}
				&.right{
					float: right;
				}
			}
		}
	}
</style>