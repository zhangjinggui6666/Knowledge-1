//utils/request.js
var baseURL = 'https://pro-dev.hanghangcha.com/api';
// #ifdef  H5
var baseURL = '/api';
// #endif
const timeout = 180000;

function request(config) {
    //请求参数追加access_token,若需要可以使用,getToken为uni.getStorageSync封装方法
    //const access_token = getToken();
    //if (access_token) {
    //config.header = {};
    //config.header['Authorization'] = 'Bearer ' + access_token;
    //config.data = config.data ? Object.assign(config.data, {
    //access_token
    //}) : {
    //access_token
    //};
    //}
    return new Promise((resolve, reject) => {
        uni.request(Object.assign(config, {
            url: baseURL + config.url,
            method: !config.method ? 'GET' : config.method.toLocaleUpperCase(), 
            timeout: timeout, //超时时间
            withCredentials: true, //跨域请求时是否携带凭证（cookies）
            success: (res) => {
                let statusCode = res.statusCode;
                //异常判断
                if (statusCode !== 200 && statusCode !== 204) {
                    uni.showToast({
                        title: res.data.error ? res.data.error.message : '网络错误!',
                        icon: 'none',
                        duration: 2000
                    });
                    //返回异常信息
                    reject(res.data || res.data.error.message);
                } else {
                    //返回正常信息
                    resolve(res.data);
                }
            },
            fail: (error) => {
                //抛出错误
                console.log('err', JSON.stringify(error))
                uni.showToast({
                    title: error.message,
                    icon: 'none',
                    duration: 2000
                });
                reject(err);
            }
        }));
    })
}
export default request