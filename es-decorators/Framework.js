export default {
	parts: {
		components: {},
		directives: {}
	},
	add: function (part, name, cls) {
		var partKey = part + 's';
		var partColl;

		if (partColl = this.parts[partKey]) {
			partColl[name] = cls;
		}
	}
};
