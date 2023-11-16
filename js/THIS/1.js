// let obj={
//     name:'cheng',
//     say: function(){
//         console.log(this.name);
//     }
// }; 
// obj.say()

// function identify(){
//     return this.name.toUpperCase()
// }
// function speek(){
//     var greeting = "Hello, I'm" + identify.call(this)
//     console.log(greeting);
// }
// var me={
//     name:'Tom'
// }
// speek.call(me)

let obj={
    this:this
}