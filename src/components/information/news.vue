<template>
	<div id="news">
		<div class="other-img">
			<img v-for="img in datas[type].otherImgs" v-lazy="img" />
		</div>
		<div class="news">
			<div class="item-list">
				<div v-for="news in datas[type].news">
					<img v-lazy="news.img" />
					<div>
						<h3 @click="goDetail(news.id)">【{{news.type}}】{{news.title}}</h3>
						<h5>{{news.time}}<span>[{{news.resource}}]</span></h5>
						<p>{{news.content}}</p>
					</div>
				</div>
			</div>
			<div class="pager">
				<pager-lh v-show="type == 1" :total="2" @change-page="changePage"></pager-lh>
				<pager-lh v-show="type == 2" :total="3" @change-page="changePage"></pager-lh>
			</div>
		</div>
	</div>
</template>

<script>
	import pager from '../tools/pager'

	export default {
		name: 'news',
		data() {
			return {
				type: 1
			}
		},
		computed: {
			datas: function() {
				this.init();
				return this.$store.state.information.news.datas;
			}
		},
		methods: {
			init() {
				this.$store.commit('information/setType', this.type);
			},
			changePage(page) {
				console.log(page);
			},
			goDetail(id) {
				this.$router.push({ path: '/information/news-detail', query: { id: id } });
			}
		},
		activated(){
			console.log(12313);
		},
		created: function() {
			console.log(123123123);
			this.type = this.$route.params.type;
		},
		watch: {
			'$route' (to) {
				this.type = to.params.type || this.type;
			}
		},
		components: {
			'pager-lh': pager
		}
	}
</script>

<style lang="scss">
	#news {
		width: 1200px;
		margin: 10px auto 40px;
		overflow: hidden;
		>.other-img {
			float: right;
			overflow: hidden;
			width: 350px;
			>img {
				float: left;
				width: 250px;
				margin: 25px 50px;
			}
		}
		>.news {
			overflow: hidden;
			>.item-list {
				padding: 0 50px 50px 100px;
				border-right: solid .5px #f0f0f0;
				>div {
					padding-top: 30px;
					min-height: 200px;
					overflow: hidden;
					>img {
						float: left;
						height: 134px;
						width: 200px;
						object-fit: cover;
					}
					>div {
						overflow: hidden;
						padding-left: 50px;
						>h3 {
							font-size: 18px;
							color: #3d414c;
							font-weight: 100;
							margin: 0;
							cursor: pointer;
							&:hover {
								font-weight: bold;
								text-decoration: underline;
							}
						}
						>h5 {
							font-size: 12px;
							color: #aeb1b8;
							margin: 20px 0;
							font-weight: 100;
							>span {
								float: right;
								color: #d52836;
							}
						}
						>p {
							font-size: 12px;
							line-height: 1.6em;
							color: #aeb1b8;
						}
					}
				}
			}
			>.pager {
				text-align: center;
			}
		}
	}
</style>