const { MultiArgument } = require('@botbind/klasa');

module.exports = class extends MultiArgument {
  constructor(...args) {
    super(...args, { aliases: ['...emoji'] });
  }

  get base() {
    return this.store.get('emoji');
  }
};
