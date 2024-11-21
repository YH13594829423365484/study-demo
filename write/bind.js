Function.prototype.myBind = function (context, ...args1) {
    const that = this
    return function fn(...args2) {
        return that.apply(context, args1.concat(args2))
    }
};

