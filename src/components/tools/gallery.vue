<template>
	<div id="gallery">
		<div v-for="img in datas" :class="{'show':img.show}" >
			<img v-lazy='img.img' />
		</div>
		<span class="close" @click="close()">×</span>
		<span class="left" @click="pre()"><</span>
		<span class="right" @click="next()">></span>
		<p>{{getText().name}}</p>
	</div>
</template>

<script>
	export default {
		name: 'gallery',
		props: {
			imgs: {
				type: Array,
				default: [{}]
			}
		},
		data() {
			return {
				index: 0
			}
		},
		created: function() {
			setTimeout(() => {
				document.getElementById('gallery').style.lineHeight = window.innerHeight + 'px';
			})
		},
		computed: {
			datas: function() {
				this.init();
				return this.imgs;
			}
		},
		methods: {
			init() {
				this.$set(this.imgs[this.index], 'show', true);
			},
			getText() {
				return this.imgs.filter((i) => i.show);
			},
			next() {
				this.$set(this.imgs[this.index], 'show', false);
				this.index = ++this.index % this.imgs.length;
				this.$set(this.imgs[this.index], 'show', true);
			},
			pre() {
				this.$set(this.imgs[this.index], 'show', false);
				this.index = (this.index + this.imgs.length - 1) % this.imgs.length;
				this.$set(this.imgs[this.index], 'show', true);
			},
			close(){
				this.$emit('changeGallery');
			}
		}
	}
</script>

<style lang="scss">
	.fade-enter-active {
		animation: fade-in .5s;
	}
	
	.fade-leave-active {
		animation: fade-in .5s reverse;
	}
	
	@keyframes fade-in {
		form {
			opacity: 0;
			transform: scale(0, 0);
		}
		to {
			opacity: 1;
			transform: scale(1, 1);
		}
	}
	
	#gallery {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 99;
		>div {
			position: absolute;
			height: 100%;
			width: 100%;
			text-align: center;
			opacity: 0;
			transform: scale(0,0);
			-webkit-transform: scale(0,0);
			transition: all .5s;
			-webkit-transition: all .5s;
			>img {
				max-height: 95%;
				max-width: 95%;
				vertical-align: middle;
			}
			&.show{
				opacity: 1;
				transform: scale(1,1);
				-webkit-transform: scale(1,1);
			}
		}
		>span {
			position: absolute;
			display: inline-block;
			background-color: rgba(0, 0, 0, .5);
			color: white;
			font-size: 50px;
			cursor: pointer;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			&.close {
				padding: 10px;
				right: 10px;
				top: 10px;
				line-height: 1em;
			}
			&.left {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				line-height: 80px;
				text-align: center;
				left: 20px;
				top: 50%;
				margin-top: -40px;
			}
			&.right {
				width: 80px;
				height: 80px;
				border-radius: 50%;
				line-height: 80px;
				text-align: center;
				right: 20px;
				top: 50%;
				margin-top: -40px;
			}
		}
		>.right {
			position: absolute;
			display: inline-block;
			background-color: rgba(0, 0, 0, .5);
			color: white;
			cursor: pointer;
		}
	}
</style>