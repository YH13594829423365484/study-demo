const router=require('koa-router')()

router.post('/login',()=>{
    let user=ctx.request.body //获取到前端传过来的参数
    console.log(user)
    //去数据库中查看是否存在user中一样的账号密码
    
})

module.exports=router