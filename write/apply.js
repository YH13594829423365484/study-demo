Function.prototype.myApply = function (context, ...args) {
    contex = context || window
    context.fn = this
    const res = context.fn(args)
    delete context.fn
    return res
}