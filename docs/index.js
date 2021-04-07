import Vue from 'vue';
import Docs from './Docs.vue';
import VueRouter from 'vue-router';

import {Slate} from '@dsbn/slate-vue';
import Demo from './Demo';
import routes from './routes'

Vue.use(Slate);
Vue.use(VueRouter);

Vue.component('demo',Demo);

const router = new VueRouter(routes);

export default new Vue({
    el: '#docs',
    router,
    render: h => h(Docs)
})