const { Inhibitor } = require('@botbind/klasa');

module.exports = class extends Inhibitor {

	run(message, command) {
		return command.hidden && message.command !== command && message.author !== this.client.owner;
	}

};
