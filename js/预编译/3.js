function fn(a){
    console.log(a);
    var a=123;
    console.log(a);
    function a(){}
    console.log(a);
    var b=function(){}//函数表达式
    console.log(b);
    function d(){}
    var d=a
    console.log(a);
}
// AO={
//     a:undefined 1  function a(){} 123,
//     b:underfind   function
//     d:undefined  function d(){}  123,
// }
fn(1)