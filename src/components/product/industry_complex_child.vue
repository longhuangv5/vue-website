<template>
	<div id="industry_complex_child_block">
		<div class="title-block">
			<img :src="datas[type].titleImg" />
			<span>{{datas[type].title}}</span>
		</div>
		<div class="block block-1">
			<div>
				<h5>{{datas[type].name1}}</h5>
				<p v-for="c in datas[type].content1">{{c}}</p>
			</div>
			<div>
				<div v-for="(i,index) in datas[type].imgs1" v-if="index < 3">
					<img v-lazy="i" />
				</div>
			</div>
		</div>
		<div class="block block-2">
			<div class="title-block">
				<img :src="datas[type].textImg1" />
				<span>{{datas[type].text1}}</span>
			</div>
			<div class="content">
				<div v-for="c in datas[type].content2">
					<div @click="showGallery = !showGallery">
						<i :style="{'background-image': 'url(../static/search.png)'}"></i>
						<img v-lazy="c.img"/>
					</div>
					<span>{{c.title}}</span>
					<h3>{{c.name}}</h3>
					<p>{{c.content}}</p>
				</div>
			</div>
			<gallery-lh v-if="showGallery" :imgs="datas[type].content2" @changeGallery="showGallery = false"></gallery-lh>
		</div>
		<div class="block block-3">
			<div class="title-block">
				<img :src="datas[type].textImg2" />
				<span>{{datas[type].text2}}</span>
			</div>
			<div class="content">
				<div v-for="img in datas[type].content3">
					<img v-lazy="img" />
				</div>
			</div>
		</div>
		<div class="block block-4">
			<div class="title-block">
				<img :src="datas[type].textImg3" />
				<span>{{datas[type].text3}}</span>
			</div>
			<div class="content">
				<banner-lh :imgs="datas[type].content4.banners"></banner-lh>
			</div>
		</div>
		<div class="block block-5">
			<div class="title-block">
				<img :src="datas[type].textImg4" />
				<span>{{datas[type].text4}}</span>
			</div>
			<div class="content">
				<div class="right">
					<iframe width="100%" height="100%" frameborder="no" scrolling="no" :src="encodeUrl(datas[type].content5.map)"></iframe>
				</div>
				<div class="left">
					<div v-for="info in datas[type].content5.infos">
						<h5>{{info.name}}：</h5>
						<p>{{info.text}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="block block-6">
			<div class="title-block">
				<img :src="datas[type].textImg5" />
				<span>{{datas[type].text5}}</span>
			</div>
			<div class="content">
				<div class="img-block" v-for="(img,index) in datas[type].content6.imgs" v-if="index < 3" >
					<img v-lazy='img'/>
				</div>
				<div class="info-block">
					<p v-for="info in datas[type].content6.infos">
						<span>{{info.name}}</span>：<span>{{info.text}}</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import gallery from '../tools/gallery'
	import banner from '../tools/banner'
	
	export default {
		name: 'industry_complex',
		data() {
			return {
				type: undefined,
				dataTemp: undefined,
				showGallery:false
			}
		},
		computed: {
			datas() {
				this.dataTemp = this.$store.state.product.industryComplexChild.datas;
				this.changeDatas();
				return this.dataTemp;
			}
		},
		methods: {
			changeDatas: function() {
				this.$store.commit('product/isNormal', true);
				this.$store.commit('product/isBanner', false);
				this.$store.commit('product/setImgs', this.dataTemp[this.type].banners);
			},
			encodeUrl(map){
				let content = '';
				map.content.forEach((c) => {
					content = content + c.name+'：'+c.text+'<br/>';
				});
				return encodeURI('../static/map/bf.html?lng='+map.lng+'&lat='+map.lat+'&content='+content);
			}
		},
		created: function() {
			this.type = this.$route.params.type;
		},
		watch: {
			'$route' (to, form) {
				this.type = to.params.type;
				this.changeDatas();
			}
		},
		components:{
			'gallery-lh':gallery,
			'banner-lh':banner
		}
	}
</script>

<style lang="scss">
	#industry_complex_child_block {
		padding: 80px 0 40px;
		>.title-block {
			text-align: center;
			>img {
				height: 39px;
			}
			>span {
				display: block;
				font-size: 23px;
				color: #444;
				font-weight: bold;
				padding: 20px 0;
			}
		}
		>.block {
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
		}
		>.block-1 {
			position: relative;
			height: 600px;
			width: 1200px;
			margin: 30px auto 0;
			&:after {
				position: absolute;
				content: '';
				width: 70%;
				height: 85%;
				border: solid 10px #d52836;
				top: 0;
				left: 15%;
				z-index: -1;
			}
			>div:first-child {
				position: absolute;
				width: 50%;
				padding:20px 40px 40px 0;
				top: 40px;
				background-color: white;
				>h5 {
					font-size: 14px;
					color: #333;
					margin: 0;
					padding: 5px 0;
				}
				>p {
					padding: 3px 0;
					font-size: 14px;
					line-height: 1.6em;
					color: #333;
				}
			}
			>div:last-child{
				> div{
					position: absolute;
					&:first-child{
						bottom: 0;
						right: 0;
						height: 346px;
						width: 50%;
						padding: 30px 0 0 30px;
						background-color: white;
					}
					&:nth-child(2){
						bottom: 346px;
						right: 0;
						height: 180px;
						width: 290px;
					}
					&:nth-child(3){
						bottom: 0;
						right: 50%;
						height: 180px;
						width: 290px;
					}
					> img{
						object-fit: cover;
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		> .block-2{
			width: 1200px;
			margin: 50px auto 0;
			> .content{
				overflow: hidden;
				> div{
					height: 630px;
					width: 31.33%;
					margin: 0 1%;
					float: left;
					background-color: #f4f8ff;
					> div{
						position: relative;
						width: 100%;
						height: 250px;
						overflow: hidden;
						cursor: pointer;
						> img{
							width: 100%;
							height: 100%;
							object-fit: cover;
							transition: all .5s;
							-webkit-transition: all .5s;
						}
						&:before{
							position: absolute;
							left: 0;
							top: 0;
							width: 100%;
							height: 100%;
							content: '';
							opacity: 0;
							background-color: rgba(0,0,0,.5);
							z-index: 2;
							transition: all .5s;
							-webkit-transition: all .5s;
						}
						> i{
							position: absolute;
							left: 50%;
							top: 50%;
							opacity: 0;
							margin-left: -10px;
							margin-top: -10px;
							content: '';
							background-position: center;
							background-repeat: no-repeat;
							width: 20px;
							height: 20px;
							z-index: 3;
							transition: all .5s;
							-webkit-transition: all .5s;
						}
						&:hover{
							> img{
								transform: scale(1.2,1.2);
								-webkit-transform: scale(1.2,1.2);
							}
							> i,&:before{
								opacity: 1;
							}
						}
					}
					> span{
						display: block;
						padding: 40px 30px 0;
						font-size: 20px;
						color: #ef7974;
					}
					> h3{
						color: #3d414c;
						font-size: 18px;
						padding: 0 30px;
					}
					> p{
						font-size: 14px;
						color: #aeb1b8;
						line-height: 1.6em;
						padding: 0 30px;
						text-align: justify;
					}
				}
			}
		}
		> .block-3{
			background-color: #f8f8f8;
			margin-top: 30px;
			> .content{
				width: 1200px;
				margin: 0 auto;
				padding: 40px 0;
				overflow: hidden;
				> div{
					float: left;
					width: 16.6666%;
					padding: 10px;
					> img{
						height: 100%;
						width: 100%;
						object-fit: cover;	
					}
				}
			}
		}
		.block-4{
			margin: 30px auto 0;
			width: 1200px;
			> .content{
				height: 480px;
			}
		}
		.block-5{
			margin: 30px auto 0;
			width: 1200px;
			> .content{
				height: 273px;
				> .right{
					float: right;
					width: 50%;
					height: 100%;
				}
				> .left{
					height: 100%;
					overflow: hidden;
					background-color: #f8f8f8;
					padding: 30px;
					> div{
						padding-bottom: 20px;
						> h5{
							display: inline-block;
							margin: 0;
							font-size: 14px;
						}
						> p{
							display: inline-block;
							margin: 0;
							font-size: 14px;
						}
					}
				}
			}
		}
		.block-6{
			width: 1200px;
			margin: 30px auto 40px;
			> .content{
				position: relative;
				height: 600px;
				&:after{
					position: absolute;
					content: '';
					height: 60%;
					width: 50%;
					left: 40%;
					top: 20%;
					border: solid 10px #f2bec2;
					z-index: -1;
				}
				> .img-block{
					position: absolute;
					object-fit: cover;
					&:first-child{
						bottom: 0;
						padding-top: 30px;
						padding-left: 30px;
						right: 0;
						height: 342px;
						width: 45%;
					}
					&:nth-child(2){
						right: 0;
						bottom: 342px;
						height: 179px;
						width: 290px;
					}
					&:nth-child(3){
						right: 45%;
						bottom: 0;
						height: 179px;
						width: 290px;
					}
					> img{
						height: 100%;
						width: 100%;
					}
				}
				> .info-block{
					width: 400px;
					height: 500px;
					background-color: #d52836;
					padding: 100px 40px 0;
					> p{
						padding: 10px 0;
						font-size: 14px;
						color: white;
					}
				}
			}
		}
	}
</style>