# 百度HTTP底层理解 从代码层走向协议层

- openai.Completion 接口，实现prompt任务
    底层封装了一次http请求
- http 请求
    - 构建在tcp/IP之上，传输的是数据包
    - Post (Method)+ url(openai api 地址) 请求行
    - 请求头 Authorization api-key key value  < = > 401 状态码 必考，重点
        cookie ?
    - 请求体 body 分包发送，上传文件 400 用户犯错了
        JSON格式的参数
        {

        }
- HTTP 状态码的划分
    1XX 请求中
    2XX 成功
    3XX 跳转
    4XX 用户有错
        401 UnAuthorized
        400 请求错误
        404 Not Found
    5XX 服务器有错
