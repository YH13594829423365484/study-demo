
function foo(){
    console.log(this.a);
}
var obj={
    a:1,
    foo:foo
}
obj.foo();
var obj2={
    a:2,
    obj:obj
}
obj2.obj.foo();