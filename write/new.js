function fn(constructor, ...args) {
    const obj = {}
    obj.__proto__ = constructor.prototype
    const res=constructor.apply(obj,args)
    return res instanceof Object?res:obj
}