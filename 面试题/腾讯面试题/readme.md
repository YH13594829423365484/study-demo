用户从url路由进来，参数校验/业务逻辑交给controller(控制器)，controller实例化相应数据表模型，完成数据操作(增删改查) model层
最后将model层返回的数据以JSON格式相应给用户(套view层)

- 中间件 middleware 洋葱模型
    node的应用运行方式
    中间件的本质是函数
    - cors 解决跨域
    - jsonParser 辅助解析post请求
    - 路由中间件
    - 鉴权中间件
    - 错误处理中间件
    以post 功能模块举例
    /posts GET 进来想要获得文章列表 我们可以安排 sort中间件负责排序
    filter中间件负责条件筛选  paginate中间件负责分页
    最后再交给控制器函数去处理， 将中间件的思想执行到底
    post.middlerware.ts 文件内
    