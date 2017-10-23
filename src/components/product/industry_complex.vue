<template>
	<div id="industry_complex_block">
		<div class="title-block">
			<img :src="datas.textImg" />
			<span>{{datas.title}}</span>
		</div>
		<div class="block-1">
			<img v-lazy="datas.img1" />
			<div>
				<h3>{{datas.name1}}</h3>
				<h5>{{datas.name2}}</h5>
				<p>{{datas.content1}}</p>
			</div>
		</div>
		<div class="block-2">
			<div class="left" :style="{'background-image': 'url('+datas.img2+')'}">
				<h3>{{datas.name3}}</h3>
				<h5>{{datas.name4}}</h5>
				<p>{{datas.content2}}</p>
			</div>
			<div class="right">
				<img v-lazy="datas.img3" />
				<div>
					<h3>{{datas.name5}}</h3>
					<h5>{{datas.name6}}</h5>
					<p>{{datas.content3}}</p>
				</div>
			</div>
		</div>
		<div class="block-3">
			<div class="right" :style="{'background-image': 'url('+datas.img5+')'}">
				<h3>{{datas.name9}}</h3>
				<h5>{{datas.name10}}</h5>
				<p>{{datas.content5}}</p>
			</div>
			<div class="left">
				<div>
					<img v-lazy="datas.img4" />
					<div>
						<h3>{{datas.name7}}</h3>
						<h5>{{datas.name8}}</h5>
						<p v-for="c in datas.content4">{{c}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="block-4" :style="{'background-image': 'url('+datas.img6+')'}">
			<div class="title-block">
				<h3>{{datas.name11}}</h3>
				<span>{{datas.name12}}</span>
			</div>
			<div class="content">
				<div v-for="c in datas.content6">
					<h5>{{c.name}}</h5>
					<p v-for="t in c.texts">{{t}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'industry_complex',
		computed: {
			datas() {
				this.changeDatas(this.$store.state.product.industryComplex.datas);
				return this.$store.state.product.industryComplex.datas;
			}
		},
		methods: {
			changeDatas: function(val) {
				this.$store.commit('product/isNormal', true);
				this.$store.commit('product/isBanner', true);
				this.$store.commit('product/setImgs', val.banners);
			}
		}
	}
</script>

<style lang="scss">
	#industry_complex_block {
		width: 1200px;
		margin: 0 auto;
		>.title-block {
			text-align: center;
			padding: 60px 0;
			>img {
				height: 52px;
			}
			>span {
				font-size: 24px;
				color: #d52836;
				padding: 0 10px;
				vertical-align: bottom;
			}
		}
		>.block-1 {
			position: relative;
			height: 480px;
			&:before {
				position: absolute;
				content: '';
				height: 37px;
				width: 13px;
				bottom: 0;
				left: 0;
				background-color: #d52836;
			}
			&:after {
				position: absolute;
				content: '';
				height: 13px;
				width: 37px;
				top: 100%;
				left: 0;
				background-color: #d52836;
			}
			>img {
				float: right;
				height: 100%;
				width: 65%;
				object-fit: cover;
			}
			>div {
				overflow: hidden;
				padding: 0 36px;
				>h3 {
					margin: 0;
					font-size: 30px;
					color: #e0e4e1;
					line-height: 2em;
				}
				>h5 {
					font-size: 18px;
					color: #333;
					margin: 0;
					line-height: 1.6em;
				}
				>p {
					font-size: 14px;
					color: #999;
					line-height: 2.4em;
					text-align: justify;
				}
			}
		}
		> .block-2{
			margin-top: 30px;
			height: 528px;
			overflow: hidden;
			> .left{
				width: 32%;
				height: 100%;
				float: left;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 100%;
				padding: 320px 30px 0;
				> h3{
					margin: 0;
					font-size: 30px;
					color: #e0e4e1;
					line-height: 1.5em;
				}
				> h5{
					margin: 0;
					font-size: 18px;
					color: white;
					line-height: 1.5em;
				}
				> p{
					font-size: 14px;
					color: #c5c9be;
					line-height: 1.6em;
				}
			}
			> .right{
				position: relative;
				float: right;
				width: 65%;
				height: 100%;
				&:after{
					position: absolute;
					content: '';
					width: 100%;
					height: 90%;
					background-color: #d52836;
					left: 0;
					bottom: 0;
					z-index: -1;
				}
				> img{
					width: 95%;
					height: 100%;
					object-fit: cover;
				}
				> div{
					position: absolute;
					left: 0;
					bottom: 0;
					background: linear-gradient(to right, rgba(255,0,0,.3), rgba(213,40,54,1));
					text-align: right;
					padding: 0 40px 10px;
					> h3{
						font-size: 30px;
						color: #eebdc0;
						margin: 0;
						padding-top: 30px;
					}
					> h5{
						font-size: 18px;
						color: white;
					}
					> p{
						font-size: 14px;
						line-height: 25px;
						color: white;
					}
				}
			}
		}
		> .block-3{
			height: 530px;
			margin-top: 30px;
			> .left{
				height: 100%;
				overflow: hidden;
				padding: 20px 20px 0 0;
				> div{
					height: 100%;
					border: solid 10px #f0f0f0;
					> img{
						float: left;
						position: relative;
						top: -30px;
						right: -20px;
						height: 100%;
						width: 365px;
						object-fit: cover;
					}
					> div{
						overflow: hidden;
						padding: 20px 0 0 50px;
						>h3{
							margin: 0;
							font-size: 30px;
							color: darkgrey;
							line-height: 2em;
						}
						> h5{
							font-size: 18px;
							line-height: 1.8em;
							color: #333;
							margin: 0;
						}
						> p{
							padding: 5px 0;
							font-size: 14px;
							line-height: 23px;
							color: #999;
							margin: 0;
						}
					}
				}
			}
			> .right{
				float: right;
				height: 100%;
				width: 32%;
				background-position: center;
				background-repeat: no-repeat;
				background-size: 100%;
				padding: 320px 30px 0;
				> h3{
					margin: 0;
					font-size: 30px;
					color: #e0e4e1;
					line-height: 1.5em;
				}
				> h5{
					margin: 0;
					font-size: 18px;
					color: white;
					line-height: 1.5em;
				}
				> p{
					font-size: 14px;
					color: #c5c9be;
					line-height: 1.6em;
				}
			}
		}
		> .block-4{
			margin-top: 20px;
			margin-bottom: 40px;
			height:530px;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100%;
			> .title-block{
				text-align: center;
				padding: 40px 0;
				> h3{
					margin: 0;
					display: inline-block;
					font-size: 70px;
					color: rgba(151,149,149,.9);
				}
				> span{
					font-size: 24px;
					vertical-align: text-bottom;
					padding-left: 10px;
					color: white;
				}
			}
			> .content{
				text-align: center;
				> div{
					display: inline-block;
					margin: 0 30px;
					background-color: rgba(210,54,66,.9);
					width: 216px;
					height: 280px;
					padding: 0 38px;
					vertical-align: top;
					> h5{
						margin: 0;
						padding: 30px 0;
						border-bottom: dashed 1px white;
						font-size: 30px;
						color: white;
						font-weight: 100;
						margin-bottom: 30px;
					}
					> p{
						font-size: 14px;
						color: white;
						margin: 0;
						padding: 5px 0;
					}
				}
			}
		}
	}
</style>