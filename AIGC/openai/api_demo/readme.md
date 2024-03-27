## openai api demo

- 自我介绍
    - 了解openai的接口调用 完成内容生成，情感分析等NLP任务

- 高级的模块化方案
    - 早期js 没有模块化方案
        完成一些事件 执行脚本
    - node
        程序执行的根本二进制可执行文件
        js chrome v8引擎    js 代码文本 =》 v8 字节码
        node 使用c++ 封装了v8引擎 引入模块化机制 commonjs
        编译器
        缺点：MVC ? Model-view-controller
        /ports -> 后端路由 -> controller -> view
    - commonjs 和ES6模块化 相比 ？ ES6 Modul 更优秀，
    - 如何在node中使用ES6模块化？ mjs


- JS 模块化 
- 异步问题
    async await ES7
    - 举例 AIGC openai接口 封装 chat async 函数
        因为在内部调用的openai chat 接口是异步的
        - chat message 是数组
            system只会出现一次，用于指定chat bot 的责任 假如你是一位前端大厂P8面试官 
            user 用户 提问内容
            assistant 助理， openai返回内容

            openai 可以接受比较长的token 为了回答问题更人性化
            message 会越来越大， 聊天上下文（context）

- open tokens 是有上限的吧? 怎么办? top_k 
    LRU
