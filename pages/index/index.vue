<template>
	<view class="content">
		<uniHeader></uniHeader>
		<uniBanner></uniBanner>
		<view>dfefe</view>
		<uniFooter></uniFooter>
	</view>
</template>

<script>
	import uniFooter from '@/components/uni-footer.vue'
	import uniHeader from '@/components/uni-header.vue'
	import uniBanner from '@/components/uni-banner.vue'
	export default {
		components:{
			uniFooter,
			uniHeader,
			uniBanner
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
		
		},
		methods: {
			handleClick(){
				// this.$tip('success','成功提示');
			//	this.toast('11111','success')
			this.load();
				// this.$u.toast({
				// 	type:'success',
				// 	message:'成功提示'
				// });
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
