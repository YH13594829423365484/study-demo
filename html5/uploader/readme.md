- html结构要注意哪些点
    - 先写好结构，盒子
    - 语义化标签，SEO友好
        搜索引擎优化

- 移动端组件的概念
    - 70%的工作是不用做的
    - 组合html,css,js,完成一件事，可以复用
- weui-cells .weui-cells_form
    - 非常常用的组件，weui-button
    - 移动端表单或者列表，都交给weui-cells 共同打理
- weui-uploader 上传界面组件
- webkit 内核 
    安卓手机，苹果手机(safari)  内核都是webkit 
    实验阶段的样式， 前面加-webkit前缀
- 移动端单屏幕，滑动操作的规矩
    html,bodys  height 100% 可以方便子元素的继承

- stylus 的语法点
    - css的超集
        直接写css也可以
    - 定义变量，嵌套，省略等....
    - 嵌套给css带来了作用域，模块的概念
    - & 虽然它是缩进的，但是它不是表示下一级，而是同一级，modifier常用，本质是文本替换
    BEM B和E的关系可以用&去抄block

- weui-cells
    - weui-cell 组成