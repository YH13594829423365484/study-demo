var obj = {
    a:1,
    foo:foo
}

function foo(){
    console.log(this.a);
}
obj.foo()