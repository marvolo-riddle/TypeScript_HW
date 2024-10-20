
class EventManager {

  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    console.log('Added')
  }

  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
    console.log('Deleted')
  }

  trigger(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(...args));
  }
}

const eventManager = new EventManager();

eventManager.on('sendGift', () => {
  console.log('Sending...');
});

eventManager.trigger('sendGift');

eventManager.off('sendGift')





