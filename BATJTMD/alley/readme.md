# 前端界面开发之专业性

- 先结构，后样式
    BEM 使用起来
    page + hd/bd/ft

-  npm i -g stylus
    node 是全栈 js 的命令行，后端 开发
    npm 是node的包管理器
    stylus 包是用来提升css 开发速度
    i install 的简称
    -g 全局
    stylus --version  

- common.styl  .styl 后缀
        - stylus 是css的超集 省去：；{}提高效率
        - tab 缩进
        - 失败，重新运行 stylus -w common.styl -o common.css
            watch监听styl文件的改变， 自动编译 css 
        - stylus嵌套
            BE里写样式的时候，自动补全css前缀 

- stylus 的功能
    - 支持变量
        晃点老板的利器

- 阿里的适配神器 flexible.js
    - 移动器不要用px px是绝对单位， rem vw/vh相对单位
    - 1rem =html font-size
    - 不同的手机 html font-size 会去设置 不一样
        iphone 是设计稿的标准尺寸 375pt 750px  414pt
        37.5 375 有什么关系
        100vw=10rem 都这样，设置不同的html font-size

- 移动端适配手写
    - 立即执行函数， 不影响外界的把功能完成了
    - 1rem=vw/10 兼容所有手机宽度
        设计稿上 750px=2*350pt phtoshop px单位的
        120px/75px = ?rem
    - onresize 
    - dry 设计模式原则，封装，复用
    - DOM性能不太好 缓存dom元素
    - script标签 src属性加载一个资源，同步的，会阻塞html的下载进程 一定要放到头部，放在css之前


- 后端素养
    - requests python 的http请求
        url(ip) + get 请求 响应式？ 服务器给你返回的财经首页html的二进制流
        response.text   html文本
    - parse 一下，BeautifulSoup(response.text, "html.parser")
        python最擅长 文本，数据 解析 .csv .sql
    - find_all dom查询 内存之中查找
        python   link for link in links if "/news" in link and

    - 随机功能



