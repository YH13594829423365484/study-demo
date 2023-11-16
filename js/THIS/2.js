// var a=1
// function foo(){
//     console.log(this.a);
// }
// function bar(){
//     var a=2;
//     foo();
// }
// bar()


function foo(){
    
    function bar(){
        console.log(this);
    }
    bar()
}
foo();
