<template>
	<view>
		 <u-navbar
			:title="title"
			@rightClick="rightClick"
			:autoBack="true"
			title-color="#333"
		>
		</u-navbar>
	</view>
</template>

<script>
	export default {
		name:"uni-navbar",
		props:{
			title:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				
			};
		},
		mounted() {
	
		}
	}
</script>

<style>

</style>