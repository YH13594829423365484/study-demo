//手写intanceof
function instance_of(L, R) {
    L=L.__proto__
    R=R.prototype
    while (L!== R) {
        if(L===null)
        return false
        L=L.__proto__
    }
    return true
}