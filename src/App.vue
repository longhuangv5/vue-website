<template>
	<div id="app">
		<header-lh :path="getHash()"></header-lh>
		<div id="content">
			<router-view/>
		</div>
		<footer-lh></footer-lh>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import header from './components/tools/header'
	import footer from './components/tools/footer'

	export default {
		name: 'app',
		data() {
			return {}
		},
		computed: {
			...mapState({
				navs: state => state.navs
			})
		},
		created: function() {
			this.$store.dispatch('getNavs');
		},
		methods: {
			getHash(){
				return location.hash.slice(1);
			}
		},
		components:{
			'header-lh': header,
			'footer-lh': footer
		}
	}
</script>

<style lang="scss">
	$text-color:#3d414c;
	$menu-color:#eaeaea;
	.color-white{
		color: white;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		> div#content{
			padding-bottom: 160px;
			padding-top: 80px;
		}
	}
</style>