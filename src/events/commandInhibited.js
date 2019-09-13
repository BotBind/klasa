const { Event } = require('@botbind/klasa');

module.exports = class extends Event {
  run(message, command, response) {
    if (response && response.length) message.sendMessage(response);
  }
};
