const http = require('http'); //commonJS

const server = http.createServer((req,res)=>{//req:前端的请求  res:后端的响应
    // 业务逻辑
    console.log(req.url);
})

server.listen(3000,()=>{
    console.log('server is running...');
})