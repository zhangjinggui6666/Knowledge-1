<template>
	<view>
		<u-tabbar
			:value="value"
			@change="handleSwitch"
			:fixed="true"
			:placeholder="true"
			:safeAreaInsetBottom="true"
		>
			<u-tabbar-item text="首页" icon="home" ></u-tabbar-item>
			<u-tabbar-item text="代理赚钱" icon="photo" ></u-tabbar-item>
			<u-tabbar-item text="加入会员" icon="play-right" ></u-tabbar-item>
			<u-tabbar-item text="我的" icon="account" ></u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value:0,
				list:[
					'/pages/index/index',
					'/pages/agent/index',
					'/pages/vip/index',
					'/pages/user/index'
				]
			};
		},
		methods:{
			handleSwitch(val){
				let url = this.list[val];
				this.goUrl(url);
			}
		},
	}
</script>

<style>

</style>