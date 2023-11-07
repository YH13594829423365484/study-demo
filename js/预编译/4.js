function foo(a,b){
    console.log(a);
    c=0;
    var c;
    a=3;
    b=2;
    console.log(b);
    function b(){}
    function d(){}
    console.log(b);
}
foo(1)
// AO={
//     c underfind,
//     a 1 3,
//     b   function b(){} 2,
//     d   function d(){} ,
//     1 2 2
// }