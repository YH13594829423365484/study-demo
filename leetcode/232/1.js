数据存储结构 
const MyQueue = function(){
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype = {
    push:function(x){
        this.stack1.push(x)
    },
    pop:function(){
        if(this.stack2.length <= 0){
            while(this.stack1.length!=0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    },
    // 拿到最front 的值 
    peek:function(){
        if(this.stack2.length<=0){
        while(this.stack1.length != 0){
            this.stack2.push(this.stack1.pop())
            }
        }
        const stack2Len = this.stack2.length;
        return stack2Len && this.stack2[stack2Len-1]
    },
    empty:function(){
        return !this.stack1.length && !this.stack2.length
    },
}