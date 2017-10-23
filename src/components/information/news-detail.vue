<template>
	<div id="news-detail">
		<div class="right">
			<img v-for="img in imgs" v-lazy="img"/>
		</div>
		<div class="left">
			<h2>【{{datas.type}}】{{datas.title}}</h2>
			<h5>{{datas.time}}<span>[{{datas.resource}}]</span></h5>
			<div class="content">
				<div v-html="datas.detail"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		name: 'news-detail',
		computed: {
			...mapState({
				datas: state => state.information.newsDetail.datas,
				imgs: state => state.information.newsDetail.imgs
			})
		},
		methods: {

		},
		created: function() {
			console.log(this.$route.query.id);
		}
	}
</script>

<style lang="scss">
	#news-detail {
		width: 1200px;
		margin: 10px auto 40px;
		overflow: hidden;
		> .right{
			float: right;
			width: 350px;
			overflow: hidden;
			> img{
				float: left;
				width: 250px;
				margin: 20px 50px;
			}
		}
		> .left{
			overflow: hidden;
			padding-right: 50px;
			border-right: solid .5px #f0f0f0;
			> h2{
				color:#3d414c
			}
			> h5{
				font-size: 15px;
				color: #d2d6df;
				font-weight: 100;
				> span{
					float: right;
					color: #d52836;
				}
			}
		}
	}
</style>