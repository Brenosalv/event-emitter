function EventEmitterFactory() {
  let obj = {
    eventName: "",
    listeners: [],
    listenersOnce: []
  };

  function emit(eventName, data) {
    try {
      const event = obj[eventName];
      if (event) {
        event.listeners.forEach(callback => callback(data));

        event.listenersOnce.forEach(callback => callback(data));
        delete event.listenersOnce;
      }
    } catch (error) {
      console.error(error);
    }
  }

  function listen(eventName, listener) {
    if (!obj[eventName]) {
      obj[eventName] = {
        eventName,
        listeners: [],
        listenersOnce: []
      };
    }

    obj[eventName].listeners.push(listener);
  }

  function removeEvent(eventName) {
    delete obj[eventName];
  }

  function listenOnce(eventName, listener) {
    if (!obj[eventName]) {
      obj[eventName] = {
        eventName,
        listeners: [],
        listenersOnce: []
      };
    }

    obj[eventName].listenersOnce.push(listener);
  }

  function removeAllEvents() {
    obj = {
      eventName: "",
      listeners: [],
      listenersOnce: []
    };
  }

  return { emit, listen, removeEvent, listenOnce, removeAllEvents };
}

export const EventEmitter = EventEmitterFactory();
