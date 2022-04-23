import App from './App'
import Vue from 'vue'
// main.js
import store from '@/store/index.js'
import uView from '@/uni_modules/uview-ui'
import mixin from '@/common/js/uni-utils.js'
Vue.use(uView);
Vue.mixin(mixin)
Vue.prototype.$store = store;

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
require('./common/config/request.js')(app)
app.$mount()
