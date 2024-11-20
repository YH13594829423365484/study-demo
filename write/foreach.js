Array.prototype.myForEach=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i],i,this)
    }
}

const res=[1,2,3]
res.forEach((value)=>{
    console.log(value+'333');
})