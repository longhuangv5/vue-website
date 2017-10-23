<template>
	<div id="header" :class="{'opc':opc.opc}">
		<div>
			<img src="../../assets/logo.png">
			<ul>
				<li v-for="nav in navs" :class="{'chk': include(nav.path)}">
					{{nav.name}}
					<span @click="goPath(nav)">{{nav.name}}</span>
					<div class="nav-double-list" v-if="nav.children && nav.children[0].children">
						<div v-for="c in nav.children">
							<h5 @click="goPath(c)">{{c.name}}</h5>
							<span v-for="d in c.children" @click="goPath(d)">{{d.name}}</span>
						</div>
					</div>
					<div class="nav-list" v-else-if="nav.children">
						<label v-for="c in nav.children" v-if="!c.hide" @click="goPath(c)">{{c.name}}</label>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'header',
		props: ['path'],
		data(){
			return {
				opc:{}
			}
		},
		computed: {
			...mapState({
				navs: state => state.navs
			})
		},
		methods: {
			goPath(nav) {
				this.$router.push({ path: nav.path, query: nav.params });
			},
			include(path) {
				return this.path.indexOf(path) === 0
			}
		},
		created:function(){
			const _this = this;
			window.onscroll = function(){
				var scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop > 80){
					_this.$set(_this.opc,'opc',true);
				}else{
					_this.$set(_this.opc,'opc',false);
				}
			}
		}
	}
</script>

<style lang="scss">
	$text-color:#3d414c;
	$menu-color:#eaeaea;
	#header {
		position: fixed;
		height: 80px;
		line-height: 80px;
		z-index: 9;
		width: 100%;
		background-color: white;
		transition: opacity 1s;
		-webkit-transition: opacity 1s;
		&.opc{
			opacity: .7;
		}
		>div {
			background-color: white;
			margin: 0 auto;
			width: 1200px;
			height: 100%;
			>img {
				height: 58px;
				vertical-align: middle;
			}
			>ul {
				list-style-type: none;
				padding: 0;
				margin: 0;
				float: right;
				height: 80px;
				line-height: 80px;
				>li {
					position: relative;
					display: inline-block;
					text-align: center;
					padding: 0 25px;
					cursor: pointer;
					color: transparent;
					font-size: 13px;
					font-weight: bold;
					-moz-user-select: nnone;
					-ms-user-select: none;
					-webkit-user-select: none;
					>span {
						position: absolute;
						color: $text-color;
						left: 0;
						top: 0;
						bottom: 0;
						right: 0;
						z-index: 2;
						transition: color .2s;
						-webkit-transition: color .2s;
					}
					&:after {
						position: absolute;
						content: '';
						background-color: red;
						bottom: 0;
						left: 0;
						right: 0;
						height: 0;
						z-index: 1;
						transition: height .2s;
						-webkit-transition: height .2s;
					}
					>.nav-list {
						position: absolute;
						left: -210px;
						top: -100%;
						right: -80px;
						background-color: $menu-color;
						transition: top .2s;
						-webkit-transition: top .2s;
						z-index: -1;
						>label {
							float: left;
							color: $text-color;
							font-size: 14px;
							line-height: 60px;
							padding: 0 20px;
							cursor: pointer;
							font-weight: 0;
							&:hover {
								color: #acbcd9;
							}
						}
					}
					>.nav-double-list {
						position: absolute;
						left: -300px;
						right: -200px;
						top: -200%;
						background-color: $menu-color;
						transition: top .2s;
						-webkit-transition: top .2s;
						z-index: -1;
						>div {
							float: left;
							padding: 20px 20px;
							text-align: left;
							>h5 {
								margin: 0;
								padding-bottom: 20px;
								color: $text-color;
								font-size: 13px;
								line-height: 1.8em;
								&:hover {
									color: #acbcd9;
								}
							}
							>span {
								display: block;
								color: $text-color;
								font-size: 14px;
								font-weight: 100;
								line-height: 2em;
								&:hover {
									color: #acbcd9;
								}
							}
						}
					}
					&.chk>span {
						color: white;
					}
					&.chk:after {
						height: 100%;
					}
					&:hover {
						&:after {
							height: 100%;
						}
						>span {
							color: white;
						}
						>.nav-list {
							top: 99%;
						}
						>.nav-double-list {
							top: 99%;
						}
					}
				}
				&:hover {
					>li.chk {
						&:after {
							height: 0;
						}
						>span {
							color: $text-color;
						}
						&:hover {
							&:after {
								height: 100%;
							}
							>span {
								color: white;
							}
						}
					}
				}
			}
		}
	}
</style>