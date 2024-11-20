class fbdy {
    constructor() {
        this.events = {}
    }

    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((callback) => {
                callback(data)
            })
        }
    }

    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].filter((element) => {
                return element !== callback
            })
        }
    }

    once(eventName, callback) {
        const wrappedCallback = (...args) => {
            callback(...args)
            this.off(eventName, wrappedCallback)
        }
        this.on(eventName, wrappedCallback)
    }
}