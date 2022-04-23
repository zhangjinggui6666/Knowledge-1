<template>
	<view>
		<uniNavbar title="代理赚钱"></uniNavbar>
		<view class="content">
			<view class="item1">
				<view class=""></view>
			</view>
		</view>
		<uniFooter></uniFooter>
	</view>
</template>

<script>
	// 引入组件
	import uniNavbar from '@/components/uni-navbar.vue'
	import uniFooter from '@/components/uni-footer.vue'
	export default {
		// 使用组件
		components: {
			uniNavbar,
			uniFooter
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scope>
	.content{
		.item1{
			background: linear-gradient(to right, #fd721f, #5e29b3);
			
		}
	}
</style>
