const http = require('http');
const { URL } = require('url');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": '*' // 被允许的源
  })
  const { url } = req
  const query = new URL(req.url, `http://${req.headers.host}`).searchParams;
  
  if (url.startsWith('/login')) {
    const reg = /^1[3|4|5|7|8][0-9]{9}$/
    const tel = query.get('username').toString()
    const psd = query.get('password').toString()
    if (reg.test(tel)) {
      const data = {
        message: '登录成功',
        code: 0
      }
      console.log(`当前正在登录的账号是：${tel}  密码：${psd}`);
      res.end(JSON.stringify(data))
    } else {
      res.end('请输入合法的手机号！')
    }
  }

})

server.listen(3000, () => {
  console.log('项目已启动');
})