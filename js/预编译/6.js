// GO ={
//     global:  underfind  100
//     fn:  function(){}  
// }

global =100
function fn(){
    console.log(global);//
    global=200;
    console.log(global);//200
    var global =300;
}
// AO={
//     global:undefined  
// }
fn()
var global;