<template>
	<div id="team-block">
		<div class="title-block">
			<img :src="datas.textImg"/>
			<span>{{datas.title}}</span>
		</div>
		<div class="block-1">
			<div v-for="t in datas.teamer">
				<img v-lazy="t.img" />
				<div>
					<h3>{{t.name}}</h3>
					<span>{{t.position}}</span>
					<p>{{t.des}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	
	export default {
		name:'team',
		computed:{
			...mapState({
				datas: state => state.main.team.datas
			})
		}
	}
</script>

<style lang="scss">
	#team-block{
		width: 1200px;
		margin: 0 auto 80px;
		> div.title-block{
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
		> div.block-1{
			overflow: hidden;
			> div{
				float: left;
				width: 50%;
				padding: 10px;
				> img{
					float: left;
					display: block;
					height: 232px;
				}
				> div{
					overflow: hidden;
					padding: 10px 40px;
					> h3{
						font-size: 28px;
						color: #444444;
						margin: 0;
						padding: 20px 0;
					}
					> span{
						font-size: 18px;
						display: block;
						color: #d52836;
						padding-bottom: 20px;
						border-bottom: solid 1px #f0f0f0;
					}
					> p{
						font-size: 12px;
						color: #999999;
						line-height: 1.6em;
						text-align: justify;
						text-indent: 2em;
					}
				}
			}
		}
	}
</style>