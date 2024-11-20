function throttle(callback,wait){
    let a=Date.now()
    return function(...args){
        let b=Date.now()
        if(a-b>=wait){
            callback.apply(this,args)
        }
        a=b
    }
}