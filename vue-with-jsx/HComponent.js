import Vue from 'vue';

export default Vue.extend({
	render: function (h) {
    	var HTag = `h${this.level}`;
    	var content = this.$slots.default;

      var extra = {
        resume: `h${+this.level + (this.level < 6 ? 1 : 0)}`
      };

    	return (
    		<div>
	    		<HTag>{content}</HTag>
          <extra.resume>{this.resume}</extra.resume>
    		</div>
    	);
  	},
  	props: ['level', 'resume']
});
