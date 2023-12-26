// 暴力破解法 逻辑 O(n^2)
// O(nlogN) 快排 归并排序   排序 + 双指针
// 策略选择  双指针

const findContentChildren=function(g,s){
    g=g.sort((a,b)=>a-b);//从小到大排序
    s=s.sort((a,b)=>a-b);
    let gi=0;
    let sj=0;
    let res=0;

    while(gi<g.length&&sj<s.length){
        if(s[sj]>=g[gi]){//当下
            gi++;
            sj++;
            res++;
        }else{
            sj++;
        }
    }
    return res;
}