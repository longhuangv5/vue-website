<template>
	<div id="footer">
		<div class="link">
			<h3>项目地址</h3>
			<span v-for="d in baseInfo.address" @click="goLink(d.url)">{{d.name}}</span>
		</div>
		<div class="base">
			<span>{{baseInfo.companyName}}</span>
			<span>{{baseInfo.netCode}}</span>
			<div>
				<span>{{baseInfo.form}}</span>
				<div>
					<img class="icon-hide" :class="{'show':showQcode}" :src="baseInfo.qcode" />
					<img class="icon-show" :src="baseInfo.weixin" @mouseenter="showImg()" @mouseleave="hideImg()" />
					<img class="icon-show" :src="baseInfo.weibo" @click="goLink(baseInfo.link)" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		name: 'footer',
		data() {
			return {
				show: false
			}
		},
		computed: {
			...mapState({
				baseInfo: state => state.footerDatas
			}),
			showQcode() {
				return this.show;
			}
		},
		methods: {
			goLink(link) {
				location.href = link;
			},
			showImg() {
				this.show = true;
				console.log(this.show);
			},
			hideImg() {
				this.show = false;
				console.log(this.show);
			}
		}
	}
</script>

<style lang="scss">
	#footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #3d414c;
		>div.link{
			width: 1200px;
			margin: 0 auto;
			> h3{
				color: #98999d;
				font-size: 18px;
			}
			> span{
				margin: 0 50px 0 0;
				font-size: 15px;
				color: #98999d;
				cursor: pointer;
				&:hover{
					color: whitesmoke;
				}
			}
		}
		>div.base {
			height: 70px;
			width: 1200px;
			margin: 0 auto;
			>span {
				color: #98999d;
				font-size: 14px;
				line-height: 70px;
				display: inline-block;
				width: 25%;
			}
			>div {
				display: inline-block;
				width: 48%;
				float: right;
				>span {
					color: #98999d;
					font-size: 14px;
					line-height: 70px;
					display: inline-block;
					width: 50%;
				}
				>div {
					position: relative;
					line-height: 70px;
					width: 48%;
					display: inline-block;
					>img.icon-hide {
						display: none;
						position: absolute;
						width: 140px;
						height: 140px;
						bottom: 100%;
						left: -5%;
						&.show {
							display: block;
						}
					}
					>img.icon-show {
						cursor: pointer;
						vertical-align: middle;
						margin-left: 30%;
					}
				}
			}
		}
	}
</style>