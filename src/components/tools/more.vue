<template>
	<svg id="get-more-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 20">
		<g>
			<path d='M0 0,L10,10 0,20' style="stroke: black;stroke-width: 2px;fill: none;"></path>
			<path d='M10 0,L20,10 L10 20' style="stroke: black;stroke-width: 2px;fill: none;"></path>
			<animateTransform attributeName="transform" begin="0s" dur="2s" type="translate" from="0 0" to="10 0" repeatCount="indefinite" />
		</g>
	</svg>
</template>

<script>
	export default {
		name:"svg_more"
	}
</script>

<style>

</style>