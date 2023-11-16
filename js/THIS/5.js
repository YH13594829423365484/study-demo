// var bar = function(){

// }//函数表达式
var obj={
    a:1
}
// var foo=()=>{
//     console.log(this.a);
// }
// foo.call(obj)
// var bar =function(){
//     console.log(this.a);
// }
// bar.call(obj)

function foo(){
    var bar =()=>{
        console.log(this);
    }
    bar()

}
foo.call(obj)