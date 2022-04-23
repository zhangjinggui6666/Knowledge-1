<template>
		<view class="header flex align-center">
			<view class="lt flex flex1 align-center justify-center">左</view>
			<view  class="md">
				<u--input
					    placeholder="优质内容等你来搜"
					    prefixIcon="search"
					    prefixIconStyle="font-size: 22px;color: #909399"
						clearable
						shape="circle"
					></u--input> 
			</view>
			<view class="rt flex flex1 align-center justify-center">右</view>
		</view>
</template>

<script>
	export default {
		name:"uni-header",
		data() {
			return {
				value:''
			};
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scope>
	.header{
		width:100%;
		background-color: $themColor;
		padding: 10px 0;
		.md{
			width:70%;
		}
	}
	
</style>