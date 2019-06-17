import Vue from 'vue';
import HComponent from './HComponent';

Vue.component('heading', HComponent);

new Vue({
	el: '#output',
	data: {
		pageTitle: 'My Homepage'
	}
});
