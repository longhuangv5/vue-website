<template>
	<div id="joinus">
		<img :src="datas.titleImg" />
		<div class="content">
			<div class="block-title">
				<img :src="datas.textImg1" />
				<h5>{{datas.title1}}</h5>
			</div>
			<p>{{datas.content1}}</p>
			<div class="block-title">
				<img :src="datas.textImg2" />
				<h5>{{datas.title2}}</h5>
			</div>
			<div class="table-block">
				<div class="left-block">
					<span v-for="info in datas.infos" :class="{'chk':info.chk}" @click="choose(info)">{{info.name}}</span>
				</div>
				<div class="right-block">
					<div v-for="info in datas.infos" v-show="info.chk">
						<h5>{{info.name}}</h5>
						<div>
							<span>工作年限</span>
							<p>{{info.year}}</p>
						</div>
						<div>
							<span>人数要求</span>
							<p>{{info.number}}</p>
						</div>
						<div>
							<span>工作地点</span>
							<p>{{info.address}}</p>
						</div>
						<div>
							<span>发布时间</span>
							<p>{{info.pushTime}}</p>
						</div>
						<div>
							<span>工作职责</span>
							<p>
								<span v-for="n in dealNeed(info.weNeed)">{{n}}</span>
							</p>
						</div>
						<div>
							<span>任职要求</span>
							<p>
								<span v-for="n in dealNeed(info.youNeed)">{{n}}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'joinus',
		computed: {
			...mapState({
				datas: state => state.joinus.datas
			})
		},
		created: function() {
			this.datas && this.datas.infos && this.datas.infos.length && this.$set(this.datas.infos[0],'chk',true);
		},
		methods: {
			choose(info) {
				this.datas.infos.forEach((i) => this.$set(i, 'chk', false));
				this.$set(info, 'chk', true);
			},
			dealNeed(str){
				str.replace(/\r/g,'');
				return str.split('\n');
			}
		}
	}
</script>

<style lang="scss">
	#joinus {
		>img {
			height: 110px;
			width: 100%;
			object-fit: cover;
		}
		>.content {
			margin-top: 60px;
			>.block-title {
				position: relative;
				text-align: center;
				padding: 24px;
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
					font-size: 18px;
					margin: 15px 0 10px;
				}
			}
			>p {
				width: 720px;
				margin: 0 auto;
				font-size: 14px;
				line-height: 1.8em;
				padding: 0 0 60px;
			}
			>.table-block {
				width: 1200px;
				margin: 0 auto;
				>div.left-block {
					float: left;
					width: 200px;
					>span {
						cursor: pointer;
						display: block;
						height: 80px;
						line-height: 80px;
						padding-left: 10px;
						border-top: dashed 1px darkgray;
						&:before {
							content: '';
							display: inline-block;
							position: relative;
							top: 6px;
							left: -10px;
							width: 25px;
							height: 25px;
							border: solid 1px darkgray;
							border-radius: 1px;
							-webkit-border-radius: 1px;
							background-color: lightgray;
						}
						&.chk:before {
							background-color: red;
						}
					}
				}
				>div.right-block {
					overflow: hidden;
					padding-left: 40px;
					>div {
						>h5 {
							margin: 0;
							text-align: center;
							font-size: 14px;
							height: 40px;
							line-height: 40px;
							background-color: #f6f6f6;
						}
						> div{
							border-top: dashed 1px lightgray;
							padding: 18px;
							> span{
								float: left;
								width: 200px;
							}
							> p{
								margin: 0;
								overflow: hidden;
								line-height: 1.8em;
								> span{
									display: block;
								}
							}
						}
					}
				}
			}
		}
	}
</style>