Function.prototype.myCall = function (context, ...args) {
    context = context || window
    context.fn = this
    const res = context.fn(...args)
    delete context.fn
    return res
}