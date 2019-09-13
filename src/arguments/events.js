const { MultiArgument } = require('@botbind/klasa');

module.exports = class extends MultiArgument {
  constructor(...args) {
    super(...args, { aliases: ['...event'] });
  }

  get base() {
    return this.store.get('event');
  }
};
