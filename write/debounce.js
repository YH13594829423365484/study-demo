function fn(callback,wait){
    let time=null
    return function fn(...args){
        clearTimeout(time)
        time=setTimeout(()=>{
            callback.apply(this,args)
        },wait)
    }
}