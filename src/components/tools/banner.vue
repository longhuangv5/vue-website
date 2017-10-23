<template>
	<div id="banner" @mouseover="stop()" @mouseleave="start()">
		<img v-for="img in datas" :class="{'chk':img.chk}" v-lazy="img.src" />
		<label class="go-left" @click="goLeft()"><</label>
		<label class="go-right" @click="goRight()">></label>
		<ul>
			<li v-for="(img,index) in datas" :class="{'chk':img.chk}" @click="goCurr(index)"></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'banner',
		props: {
			imgs: {
				type: Array
			},
			timer: {
				type: Number,
				default:5000
			}
		},
		data(){
			return {
				num:0,
				interval:undefined
			}
		},
		computed: {
			datas: function() {
				setTimeout(() => this.init());
				return this.imgs;
			}
		},
		destroyed:function() {
			this.stop();
		},
		methods:{
			init(){
				this.stop();
				this.$set(this.imgs[0], 'chk', true);
				this.imgs.forEach((img,i) => i ? this.$set(img, 'chk', false) : this.$set(img, 'chk', true))
				this.start();
			},
			start:function(){
				this.interval = setInterval(() => {
					this.$set(this.imgs[this.num], 'chk', false);
					this.$set(this.imgs[this.num = (this.num+1)%this.imgs.length], 'chk', true);
				},this.timer);
			},
			stop:function(){
				this.interval && window.clearInterval(this.interval);
			},
			goLeft:function(){
				this.$set(this.imgs[this.num], 'chk', false);
				this.$set(this.imgs[this.num = (this.num+this.imgs.length-1)%this.imgs.length], 'chk', true);
			},
			goRight:function(){
				this.$set(this.imgs[this.num], 'chk', false);
				this.$set(this.imgs[this.num = (this.num+1)%this.imgs.length], 'chk', true);
			},
			goCurr:function(index){
				if(this.num === index)return false;
				this.$set(this.imgs[this.num], 'chk', false);
				this.$set(this.imgs[this.num = index], 'chk', true);
			}
		}
	}
</script>

<style lang="scss">
	#banner {
		height: 100%;
		width: 100%;
		position: relative;
		>img {
			position: absolute;
			left: 0;
			top: 0;
			height: 100%;
			width: 100%;
			object-fit: cover;
			opacity: 0;
			transition: opacity 1.5s;
			-webkit-transition: opacity 1.5s;
			&.chk {
				opacity: 1;
			}
		}
		> label{
			position: absolute;
			display: inline-block;
			width: 80px;
			height: 80px;
			line-height: 80px;
			font-size: 56px;
			color: white;
			text-align: center;
			background-color: black;
			border-radius: 50%;
			-webkit-border-radius: 50%;
			opacity: 0;
			transition: opacity .5s;
			-moz-user-select: none;
			-webkit-user-select: none;
			-ms-user-select: none;
			cursor: pointer;
			&.go-left{
				left: 10px;
				top: 50%;
				margin-top: -40px;
			}
			&.go-right{
				right: 10px;
				top: 50%;
				margin-top: -40px;
			}
		}
		&:hover{
			> label{
				opacity: .5;
				&:hover{
					opacity: 1;
				}
			}
		}
		> ul{
			position: absolute;
			width: 100%;
			bottom: 50px;
			list-style-type: none;
			padding: 0;
			margin: 0;
			text-align: center;
			> li{
				display: inline-block;
				margin: 0 10px;
				width: 12px;
				height: 12px;
				border: solid 1px white;
				border-radius: 50%;
				-webkit-border-radius: 50%;
				cursor: pointer;
				&.chk{
					background-color: white;
				}
			}
		}
	}
</style>