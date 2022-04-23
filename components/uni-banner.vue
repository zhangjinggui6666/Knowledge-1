<template>
	<view class="banner">
		<u-swiper
			:list="list"
			indicator
			indicatorMode="line"
			circular
			height="180"
		    ></u-swiper>
	</view>
</template>

<script>
	export default {
		name:"uni-banner",
		data() {
			return {
				 list: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				]
			};
		}
	}
</script>

<style lang="scss" scope>
	.banner{
		width:100%;
	}
</style>