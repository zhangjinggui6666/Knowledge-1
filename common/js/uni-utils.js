module.exports = {
	data(){
		return{
			
		}
	},
	methods:{
		//底部导航栏切换
		 switch(url){
			uni.switchTab({
				url
			});	
		},
		//跳转页面
		goUrl(url){
			uni.navigateTo({
				url,
				animationType: 'pop-in',
				animationDuration: 200
			});
		},
		//返回上一页
		back(){
			let pages = getCurrentPages();
			if (pages && pages.length > 1) {
				uni.navigateBack({
					delta: 1,
				});
			} else {
				history.back();
			}
		},
		//提示框
		tip (title='',icon='none'){
			uni.showToast({
				title,
				icon,
				duration:2000,
			});
		},
		//加载状态
		showload(){
			uni.showLoading({
				title: '加载中'
			});
		},
		//隐藏加载
		hideload(){
			uni.hideLoading();
		},
	}
}