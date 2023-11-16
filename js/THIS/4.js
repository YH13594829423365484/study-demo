function foo(x,y){
    console.log(this.a,x+y);

}
var obj={
    a:1
}
// foo.call(obj,4,5)
// foo.apply(obj,[4,5])
foo.bind(obj)(4,5)