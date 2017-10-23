<template>
	<div id="pager">
		<ul>
			<li @click="pre()" :class="{'not-allowed':curr === 1}">上一页</li>
			<li v-for="p in pagers" :class="{'chk':curr === p}" @click='jump(p)'>{{p}}</li>
			<li @click="next()" :class="{'not-allowed':curr === total}">下一页</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "pager",
		data() {
			return {
				pagerNum: 5,
				startNum: 1,
				curr: 1
			}
		},
		props: {
			total: {
				type: Number,
				default: 1
			}
		},
		computed: {
			pagers: function() {
				const pagers = [];
				let endNum = this.total - this.startNum + 1 > this.pagerNum ? this.pagerNum + this.startNum - 1 : this.total;
				for(let i = this.startNum; i <= endNum; i++) {
					pagers.push(i);
				}
				this.startNum > 1 && pagers.unshift('..');
				this.total > endNum && pagers.push('...');
				return pagers;
			}
		},
		methods: {
			jump(str) {
				switch(str) {
					case '..':
						this.startNum = this.startNum > this.pagerNum ? this.startNum - this.pagerNum : 1;
						this.curr = this.startNum;
						this.$emit('change-page',this.curr);
						break;
					case '...':
						this.startNum = this.startNum + this.pagerNum;
						this.curr = this.startNum;
						this.$emit('change-page',this.curr);
						break;
					default:
						if(this.curr !== str){
							this.curr = str;
							this.$emit('change-page',this.curr);
						}
						break;
				}
			},
			pre(){
				if(this.curr > 1){
					this.curr--;
					this.startNum > this.curr && (this.startNum = this.startNum > this.pagerNum ? this.startNum - this.pagerNum : 1);
					this.$emit('change-page',this.curr);
				}
			},
			next(){
				if(this.curr < this.total){
					this.curr++;
					this.curr > this.startNum + this.pagerNum - 1 && (this.startNum = this.startNum + this.pagerNum);
					this.$emit('change-page',this.curr);
				}
			}
		}
	}
</script>

<style lang="scss">
	#pager{
		> ul{
			list-style-type: none;
			margin: 0;
			padding: 0;
			> li{
				margin: 0 1px;
				display: inline-block;
				width: 50px;
				height: 30px;
				font-size: 15px;
				line-height: 30px;
				text-align: center;
				border: solid 1px lightgray;
				border-radius: 3px;
				-webkit-border-radius: 3px;
				color: #333;
				transition: all .3;
				-webkit-transition: all .3;
				cursor: pointer;
				-moz-user-select: none;
				-ms-user-select: none;
				-webkit-user-select: none;
				&.chk{
					background-color: red;
					color: white;
					border: solid 1px red;
				}
				&.not-allowed{
					cursor: not-allowed;
				}
				&:first-child,&:last-child{
					width: 60px;
				}
			}
		}
	}
</style>