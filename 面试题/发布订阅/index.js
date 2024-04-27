class EventEmitter {
    constructor() {
      this.handles = {}
    }
    
    on(eventName, cb) {  // { 'onSell': [cb1, cb2], 'onCar': [xxx] }
      if (!this.handles[eventName]) {
        this.handles[eventName] = []
      }
      this.handles[eventName].push(cb)
    }
  
    emit(eventName) {
      if (this.handles[eventName]) {
        const handles = this.handles[eventName]
        handles.forEach(cb => {
          cb()
        });
      }
    }
  
    off(eventName, cb) {
      const handles = this.handles[eventName]
      const index = handles && handles.indexOf(cb)
      if (index !== -1) {
        handles.splice(index, 1)
      }
    }
  
    once(eventName, cb) { 
      if (this.handles[eventName] && this.handles[eventName].indexOf(cb) !== -1) {
        return
      }
      this.on(eventName, cb)
    }
  
  }
  
  
  
  const emiter = new EventEmitter()
  
  // function wan() {
  //   console.log('万总说买');
  // }
  // emiter.on('onSell', wan)
  // emiter.off('onSell', wan)
  
  
  function wu() {
    console.log('吴总去买房');
  }
  emiter.once('onSell', wu)
  emiter.once('onSell', wu)
  emiter.once('onSell', wu)
  
  setTimeout(() => {
    emiter.emit('onSell')
  }, 2000)
  
  