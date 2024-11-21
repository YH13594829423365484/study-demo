const s1 = "(){}[]"
const s2 = "(({{[[]]}}))"
const s3 = "(]{)"
function fn(s) {
    const res = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            res.push(s[i])
        }
        if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
            const last = res.pop()
            if (!last) return false
            if (s[i] === ")" && last !== "(" ||
                s[i] === "]" && last !== "[" ||
                s[i] === "}" && last !== "{"
            ) {
                return false
            }
        }
    }
    return res.length === 0
}
//用对象存储数据来优化
function newFn(s) {
    const obj={")":"(","]":"[","}":"{"}
    const res=[]
    for(let i=0;i<s.length;i++){
        if(s[i]===")"||s[i]==="]"||s[i]==="}"){
            if(obj[s[i]]!==res.pop()) return false
        }else{
            res.push(s[i])
        }
    }
    return res.length===0
}
console.log(newFn(s1));
console.log(newFn(s2));
console.log(newFn(s3));
