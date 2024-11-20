Array.prototype.myMap=function(callback){
    const res=[]
    for(let i=0;i<this.length;i++){
        res.push(callback(this[i],i,this))
    }
    return res
}
const res=[1,2,3]
const newRes=res.map((value)=>{
    return value+1
})
console.log(newRes);
