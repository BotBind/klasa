const { MultiArgument } = require('@botbind/klasa');

module.exports = class extends MultiArgument {

	constructor(...args) {
		super(...args, { aliases: ['...task'] });
	}

	get base() {
		return this.store.get('task');
	}

};
