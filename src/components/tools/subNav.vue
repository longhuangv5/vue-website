<template>
	<div id="sub-menu">
		<div>
			<div class="parent-to-child">
				<span>{{subNavs.name}}</span> >
				<span>{{getChildName().name}}</span>
			</div>
			<div class="subs-menu">
				<ul>
					<li v-for="c in subNavs.children" v-if="!c.hide" :class="{'chk': include(c)}" @click="goPath(c)">
						{{c.name}}
						<div v-if="c.children">
							<ul>
								<li v-for="cc in c.children" @click.stop="goPath(cc)">{{cc.name}}</li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'subNav',
		props: ['hash', 'datas'],
		computed: {
			...mapState({
				navs: state => state.navs,
			}),
			subNavs: function() {
				return this.navs.filter((n) => n.path === this.datas.path)[0]
			}
		},
		methods: {
			getChildName() {
				const curr = this.subNavs.children.filter((c) => this.hash.indexOf(c.path) === 1)[0];
				return (curr.path !== this.hash.slice(1) && curr.children) ? curr.children.filter((c) => this.hash.slice(1) === c.path)[0] : curr;
			},
			include(c) {
				return this.hash.indexOf(c.path) === 1;
			},
			goPath(c){
				this.$router.push({path:c.path,query:c.params});
			}
		}
	}
</script>

<style lang="scss">
	#sub-menu {
		height: 70px;
		line-height: 70px;
		border-bottom: solid .5px #f0f0f0;
		>div {
			width: 1200px;
			margin: 0 auto;
			>.parent-to-child {
				display: inline-block;
				>span {
					font-size: 15px;
					padding: 0 5px 0 0;
					&:last-child {
						font-weight: bold;
					}
				}
			}
			>.subs-menu {
				float: right;
				height: 100%;
				>ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
					>li {
						position: relative;
						display: inline-block;
						padding: 0 10px;
						font-size: 15px;
						color: #808081;
						cursor: pointer;
						&:after {
							position: absolute;
							content: '';
							bottom: 0;
							left: 10%;
							width: 0;
							height: 3px;
							background-color: red;
							transition: width .3s;
							-webkit-transition: width .3s;
						}
						&:hover:after,
						&.chk:after {
							width: 80%;
						}
						> div{
							position: absolute;
							display: none;
							top: 100%;
							right:0;
							max-width: 1000px;
							background-color: #eaeaea;
							height: 60px;
							line-height: 60px;
							> ul{
								list-style-type: none;
								margin: 0;
								padding: 0;
								height: 100%;
								white-space: nowrap;
								> li{
									display: inline-block;
									padding: 0 20px;
									&:hover{
										color: black;
									}
								}
							}
						}
						&:hover > div{
							display: block;
						}
					}
				}
			}
		}
	}
</style>