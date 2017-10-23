<template>
	<div>
		<div id="home-banner">
			<banner-lh :imgs="imgs" :timer="5000"></banner-lh>
		</div>
		<div class="product-design">
			<div class="block-title">
				<img :src="datas.img1" />
				<h5>{{datas.title1}}</h5>
			</div>
			<div class="block-body">
				<div class="product-design-left">
					<img v-lazy="datas.img2" />
					<div>
						<h5>{{datas.name1}}</h5>
						<p>{{datas.des1}}</p>
					</div>
				</div>
				<div class="product-design-right">
					<div>
						<img v-lazy="datas.img3" />
						<div>
							<h5>{{datas.name2}}</h5>
							<p>{{datas.des2}}</p>
						</div>
					</div>
					<div :style="{'background-image': 'url('+datas.img4+')'}">
						<div>
							<h5>{{datas.name3}}</h5>
							<p>{{datas.des3}}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="operation-system" :style="{'background-image': 'url('+datas.img6+')'}">
			<div class="block-title color-white">
				<img :src="datas.img5" />
				<h5>{{datas.title2}}</h5>
			</div>
			<div class="block-body">
				<table>
					<tr>
						<td rowspan="2" @click="jump('/operate/operate_child',2)">
							<div :style="{'background-position-y': '-103px'}"></div>
							<h5>{{datas.name4}}</h5>
							<p>{{datas.des4}}</p>
						</td>
						<td @click="jump('/operate/operate_child',1)">
							<div :style="{'background-position-y': '-52px'}"></div>
							<h5>{{datas.name5}}</h5>
							<p>{{datas.des5}}</p>
						</td>
						<td rowspan="2" @click="jump('/operate/operate_child',3)">
							<div :style="{'background-position-y': '-210px'}"></div>
							<h5>{{datas.name7}}</h5>
							<p>{{datas.des7}}</p>
						</td>
						<td @click="jump('/operate/operate_child',5)">
							<div :style="{'background-position-y': '6px'}"></div>
							<h5>{{datas.name8}}</h5>
							<p>{{datas.des8}}</p>
						</td>
						<td rowspan="2" @click="jump('/operate/operate_child',4)">
							<div :style="{'background-position-y': '-158px'}"></div>
							<h5>{{datas.name10}}</h5>
							<p>{{datas.des10}}</p>
						</td>
					</tr>
					<tr>
						<td @click="jump('/operate/operate_child',7)">
							<div :style="{'background-position-y': '-315px'}"></div>
							<h5>{{datas.name6}}</h5>
							<p>{{datas.des6}}</p>
						</td>
						<td @click="jump('/operate/operate_child',6)">
							<div :style="{'background-position-y': '-260px'}"></div>
							<h5>{{datas.name9}}</h5>
							<p>{{datas.des9}}</p>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="video-block" :style="{'background-image': 'url('+datas.img7+')'}">
			<div class="block-title">
				<img :src="datas.img8" />
				<h5>{{datas.title3}}</h5>
			</div>
			<div class="load-more">
				<div>
					<span>更多</span>
					<div>
						<more-lh></more-lh>
					</div>
				</div>
			</div>
			<div class="block-body">
				<video preload="none" controls :poster="datas.img9">
					<source :src="datas.video" type="video/mp4">
				</video>
			</div>
		</div>
		<div class="information-block">
			<div class="block-title">
				<img :src="datas.img10" />
				<h5>{{datas.title4}}</h5>
			</div>
			<div class="load-more">
				<div>
					<span>更多</span>
					<div>
						<more-lh></more-lh>
					</div>
				</div>
			</div>
			<div class="block-body">
				<div v-for="info in news">
					<div>
						<img v-lazy="info.img" />
						<h5>【{{info.type}}】{{info.title}}</h5>
						<p>{{info.time}}</p>
						<span>{{info.content}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import { mapState } from 'vuex'
	import more from './tools/more'
	import banner from './tools/banner'

	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				imgs: state => state.home.banners,
				datas: state => state.home.datas,
				news: state => state.information.news.news
			})
		},
		methods: {
			jump(path, type) {
				this.$router.push({
					path: path,
					query: {
						type: type
					}
				})
			}
		},
		components: {
			'more-lh': more,
			'banner-lh': banner
		}
	}
</script>

<style lang="scss">
	#home-banner {
		height: 500px;
		width: 100%;
	}
	
	.load-more {
		position: relative;
		top: -40px;
		height: 20px;
		text-align: right;
		width: 1200px;
		margin: -15px auto 0;
		> div{
			display: inline-block;
			height: 100%;
			cursor: pointer;
			>div {
				height: 100%;
				width: 45px;
				display: inline-block;
			}
			>span {
				vertical-align: text-bottom;
			}
		}
	}
	
	.block-title {
		position: relative;
		text-align: center;
		padding: 20px;
		&:before {
			position: absolute;
			content: '';
			top: 0;
			left: 50%;
			width: 36px;
			margin-left: -18px;
			height: 3px;
			background-color: red;
		}
		>img {
			height: 37px;
		}
		>h5 {
			font-size: 28px;
			font-weight: 100;
			margin: 10px 0 20px;
		}
	}
	
	.product-design {
		width: 1200px;
		margin: 80px auto 0;
		>.block-body {
			height: 700px;
			>.product-design-left {
				position: relative;
				width: 48%;
				height: 100%;
				display: inline-block;
				>img {
					height: 100%;
					width: 95%;
					object-fit: cover;
					float: right;
				}
				>div {
					position: absolute;
					left: 0;
					top: 30%;
					width: 300px;
					>h5 {
						text-align: center;
						font-size: 22px;
						color: white;
						margin: 20px 0;
						font-weight: 100;
					}
					>p {
						padding: 30px 40px;
						font-size: 12px;
						color: white;
						line-height: 1.8em;
						background: linear-gradient(to left, rgba(255, 0, 0, .3), rgba(213, 40, 54, 1));
					}
				}
			}
			>.product-design-right {
				float: right;
				height: 100%;
				width: 50%;
				>div {
					&:first-child {
						height: 338px;
						position: relative;
						>img {
							width: 50%;
							height: 100%;
							object-fit: cover;
						}
						&:after {
							position: absolute;
							content: '';
							background-color: white;
							width: 30px;
							height: 30px;
							transform: rotate(45deg);
							-webkit-transform: rotate(45deg);
							top: 30px;
							left: 48%;
						}
						>div {
							float: right;
							height: 100%;
							width: 44%;
							>h5 {
								font-size: 22px;
								font-weight: 100;
								color: #333333;
							}
							>p {
								font-size: 12px;
								color: #999999;
								line-height: 1.8em;
								font-weight: bold;
							}
						}
						&:before {
							position: absolute;
							content: '';
							width: 88px;
							height: 3px;
							bottom: 0;
							right: 0;
							background-color: #d52836;
						}
					}
					&:last-child {
						margin-top: 20px;
						height: 340px;
						background-repeat: no-repeat;
						background-size: 100% 100%;
						background-position: center;
						>div {
							width: 48%;
							height: 100%;
							background-color: rgba(56, 53, 54, .9);
							padding: 38px 40px;
							>h5 {
								font-size: 22px;
								color: white;
								font-weight: 100;
								margin-top: 0;
							}
							>p {
								font-weight: bold;
								font-size: 12px;
								line-height: 1.8em;
								color: white;
							}
						}
					}
				}
			}
		}
	}
	
	.operation-system {
		height: 943px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: auto 100%;
		padding-top: 80px;
		margin-top: 80px;
		>.block-body {
			width: 1111px;
			margin: -64px auto;
			>table {
				height: 700px;
				>tr {
					>td {
						width: 20%;
						vertical-align: middle;
						cursor: pointer;
						>h5 {
							text-align: center;
							font-size: 18px;
							color: white;
							margin: 15px 0;
						}
						>p {
							font-size: 12px;
							color: #ebebeb;
							line-height: 1.8em;
						}
						>div {
							height: 57px;
							background-image: url('../../static/operation-icons.png');
							background-repeat: no-repeat;
							background-position-x: center;
						}
					}
				}
			}
		}
	}
	
	.video-block {
		padding-top: 80px;
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100% 100%;
		height: 700px;
		>.block-body {
			margin: 0 auto;
			width: 1200px;
			height: 400px;
			>video {
				height: 100%;
				width: 100%;
			}
		}
	}
	
	.information-block {
		margin: 80px auto 80px;
		>.block-body {
			overflow: hidden;
			width: 1200px;
			margin: 0 auto;
			>div {
				float: left;
				width: 33.33%;
				padding: 0 10px;
				>div {
					>img {
						height: 200px;
						width: 100%;
						object-fit: cover;
					}
					>h5 {
						margin: 10px 0;
						font-size: 16px;
						color: #3d414c;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
					>p {
						text-align: right;
						font-size: 12px;
						color: #aeb1b8;
					}
					>span {
						display: block;
						color: #666;
						font-size: 14px;
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
					}
				}
			}
		}
	}
</style>