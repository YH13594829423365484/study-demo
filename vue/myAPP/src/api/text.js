let name='张三'
let age=18
const sex='男'
function clog(){
    console.log(name,age,sex)
}

export const info='人物信息'
export { //抛出info变量和clog方法
    name,
    age,
    sex
}