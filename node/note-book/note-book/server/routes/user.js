const Router =require('@koa/router')
const router=new Router()
const {userLogin}=require('../contorllers/mysqlControl.js')
//定义接口
router.post('/user/login',async(ctx)=>{
    // console.log(ctx.request.body); //获取到前端传递的参数
    const {username,password}=ctx.request.body

    try{
        const result=await userLogin(username,password)
        console.log(result);
        if(result.length){// 查到了
            let data={
                nickname:result[0].nickname,
                id:result[0].id,
                username:result[0].username
            }
            ctx.body={
                code:'8000',
                msg:'登录成功',
                data:data
            }
        }else{
            ctx.body={
                code:'8004',
                msg:'登录失败',
                data:'账号或密码错误'
            }
        }
    }catch(err){
        ctx.body={
            code:'8005',
            msg:'服务器异常',
            data:err
        }
    }
})

module.exports=router