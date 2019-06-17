import Vue from 'vue';
import VueMathPlugin from './VueMathPlugin';

Vue.use(VueMathPlugin);

new Vue({
	el: '#output',
	data: {
		item: 49
	}
});
