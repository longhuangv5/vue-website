<template>
	<div id="video">
		<div class="right">
			<img v-for="img in datas.otherImgs" v-lazy="img"/>
		</div>
		<div class="left">
			<div v-for="video in datas.videos">
				<div>
					<video controls :poster="video.img">
						<source :src="video.src" type="video/mp4">
					</video>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'video',
		computed:{
			datas:function(){
				return this.$store.state.information.video.datas
			}
		}
	}
</script>

<style lang="scss">
	#video{
		width: 1200px;
		margin: 10px auto 40px;
		overflow: hidden;
		> .right{
			float: right;
			width: 350px;
			overflow: hidden;
			> img{
				float: left;
				margin: 20px 50px;
				width: 250px;
			}
		}
		> .left{
			overflow: hidden;
			border-right: solid 1px #f0f0f0;
			> div{
				float: left;
				width: 50%;
				padding-right: 40px;
				margin-bottom: 20px;
				height: 200px;
				> div{
					width: 100%;
					height: 100%;
					background-color: black;
					> video{
						height: 100%;
						width: 100%;
					}
				}
			}
		}
	}
</style>