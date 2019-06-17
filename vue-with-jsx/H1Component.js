import Vue from 'vue';

export default Vue.extend({
	render: function (h) {
    	var HTag = `h${this.level}`;
    	var content = this.$slots.default;

    	return (
    		<div>
	    		<HTag>{content}</HTag>
    		</div>
    	);
  	},
  	props: ['level']
});
