import Vue from 'vue';

export default Vue.extend({
	render: function (h) {
    	var content = this.$slots.default;
    	var heading;
    	
    	switch (+this.level) {
    		case 1:
    			heading = <h1>{content}</h1>;
    			break;
    		case 2:
    			heading = <h2>{content}</h2>;
    			break;
    		case 3:
    			heading = <h3>{content}</h3>;
    			break;
    		case 4:
    			heading = <h4>{content}</h4>;
    			break;
    		case 5:
    			heading = <h5>{content}</h5>;
    			break;
    		case 6:
    			heading = <h6>{content}</h6>;
    			break;
    	}

    	return (
    		<div>
	    		{heading}
    		</div>
    	);
  	},
  	props: ['level']
});
