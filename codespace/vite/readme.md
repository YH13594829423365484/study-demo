# vite 工程化

- 前端项目构建脚手架
    - 快速启动项目
        git 拉一个项目
    - 命令行工具
        代码的编译 stylus -> css || es6 -> es5
    - 配置
        alias 等
    - 现代的，相比较于传统的webpack速度更快
        - 不到1s go rust 这种构建工具，比node更快
            webpack 10s 左右
        - script type=module 浏览器支持ES6模块化
            旧浏览器不支持 兼容性 ie11之前不支持了,
            需要webpack  webpack会把项目的所有文件先打包
            而vite 基于type=module 不用打包，直接运行
            为什么更快？

- vite 让项目运行起来的流程
    - npm run dev
        - index.html作为首页 启动web服务器
        