// 后端框架 commonjs
// 服务器端 vite 是用服务器端实现的

const Koa = require('koa');
const fs = require('fs'); // node 文件系统  内置的
// 实例化koa 就是一个后端应用 OOP
const app = new Koa();
// ctx 对象，ctx.body代表响应体
app.use(async ctx=>{
    // cts是请求响应上下文对象
    // HTTP 是基于请求响应的简单协议
    // indexedDB.html 返回给用户就看到首页了
    //  字符串二进制流
    // 冯诺依曼
    // 代码在内存中运行
    // 读取文件系统里的index.html fs模块
    // js 异步 同步化
    // I/O操作 花时间
    let content = fs.readFileSync('./index.html','utf-8');
    ctx.body = content
})

// 后端启动web服务

app.listen(5174,()=>{
    console.log('项目在5174端口启动成功');
});