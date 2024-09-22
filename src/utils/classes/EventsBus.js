class EventBus {
  constructor() {
    this.events = {};
  };

  on = (eventName, ...listeners) => {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(...listeners);
  };

  off = (eventName, fnToRemove) => {
    const listeners = this.events[eventName];
    console.log(listeners);

    if (!fnToRemove) {
      delete this.events[eventName];
      return;
    }

    if (!Array.isArray(listeners)) return;

    const index = listeners.findIndex(fn => fn === fnToRemove);

    if (index !== -1) {
      listeners.splice(index, 1);
    };
  };

  emit = (eventName, eventObject) => {
    const listeners = this.events[eventName];
    if (!Array.isArray(listeners)) return;
    listeners.forEach(listener => listener(eventObject));
  }
};

export default EventBus;