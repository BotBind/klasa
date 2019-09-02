const { Serializer } = require('@botbind/klasa');

module.exports = class extends Serializer {

	deserialize(data) {
		return String(data);
	}

};
