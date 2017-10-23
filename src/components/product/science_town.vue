<template>
	<div id="science_town_block">
		<div class="title-block">
			<img :src="datas.textImg" />
			<span>{{datas.title}}</span>
		</div>
		<div class="block-1">
			<img v-lazy="datas.img1" />
			<div>
				<h3>{{datas.name1}}</h3>
				<p>{{datas.content1}}</p>
			</div>
		</div>
		<div class="block-2" :style="{'background-image': 'url('+datas.img2+')'}">
			<h3>{{datas.name2}}</h3>
			<p>{{datas.content2}}</p>
		</div>
		<div class="block-3">
			<div class="right">
				<div>
					<h3>{{datas.name5}}</h3>
					<p>{{datas.content5}}</p>
				</div>
				<img v-lazy="datas.img5" />
			</div>
			<div class="left">
				<div class="sub-block-1" :style="{'background-image': 'url('+datas.img3+')'}">
					<h3>{{datas.name3}}</h3>
					<p>{{datas.content3}}</p>
				</div>
				<div class="sub-block-2">
					<img v-lazy="datas.img4" />
					<div>
						<h3>{{datas.name4}}</h3>
						<p>{{datas.content4}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'science-town',
		computed: {
			datas() {
				this.changeDatas(this.$store.state.product.scienceTown.datas);
				return this.$store.state.product.scienceTown.datas;
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
	#science_town_block {
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
			height: 480px;
			>img {
				float: left;
				display: block;
				height: 100%;
				width: 63%;
				object-fit: cover;
			}
			>div {
				overflow: hidden;
				padding: 20px 10px 0 40px;
				>h3 {
					font-size: 22px;
					color: #444;
				}
				>p {
					font-size: 14px;
					color: #a1a1a1;
					line-height: 1.6em;
					text-align: justify;
					padding: 20px 0;
				}
			}
		}
		>.block-2 {
			margin-top: 30px;
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100%;
			padding: 50px 210px;
			>h3 {
				text-align: center;
				color: white;
				margin: 0;
				font-size: 22px;
				padding-bottom: 30px;
			}
			>p {
				font-size: 14px;
				color: #ebebeb;
			}
		}
		>.block-3 {
			height: 550px;
			margin: 30px 0 40px;
			>.right {
				position: relative;
				float: right;
				height: 100%;
				width: 32%;
				padding-top: 30px;
				>div {
					height: 100%;
					background-color: #d52836;
					padding: 200px 30px 0;
					>h3 {
						text-align: center;
						font-size: 22px;
						color: white;
					}
					>p {
						font-size: 14px;
						text-align: justify;
						color: #efbdc0;
						line-height: 1.6em;
					}
				}
				>img {
					position: absolute;
					top: 0;
					left: 0;
					width: 93%;
					object-fit: cover;
					height: 220px;
				}
			}
			>.left {
				overflow: hidden;
				padding-right: 30px;
				>.sub-block-1 {
					height: 260px;
					padding: 46px 140px 0 40px;
					>h3 {
						margin: 0;
						font-size: 22px;
						color: white;
					}
					>p {
						color: #f4f4f4;
						font-size: 14px;
						line-height: 1.6em;
					}
				}
				>.sub-block-2 {
					position: relative;
					margin-top: 30px;
					height: 260px;
					>img {
						display: block;
						float: left;
						height: 100%;
						width: 50%;
						object-fit: cover;
					}
					>div {
						overflow: hidden;
						padding: 20px 0 0 40px;
						>h3 {
							font-size: 22px;
							color: #333;
						}
						>p {
							font-size: 14px;
							color: #999;
							line-height: 1.6em;
						}
					}
					&:before {
						position: absolute;
						content: '';
						width: 22px;
						bottom: 0;
						height: 3px;
						right: 0;
						background-color: #d52836;
					}
					&:after {
						position: absolute;
						content: '';
						width: 3px;
						height: 30px;
						right: -3px;
						bottom: 0;
						background-color: #d52836;
					}
				}
			}
		}
	}
</style>