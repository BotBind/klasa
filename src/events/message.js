const { Event } = require('@botbind/klasa');

module.exports = class extends Event {
  run(message) {
    if (this.client.ready) this.client.monitors.run(message);
  }
};
