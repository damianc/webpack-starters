import Vue from 'vue';
import H1Component from './H1Component';

Vue.component('primary-heading', H1Component);

new Vue({
	el: '#output',
	data: {
		pageTitle: 'My Homepage'
	}
});
