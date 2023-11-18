(function() {
    var width = window.innerWidth;
    var fontSize = width / 10;
    document.documentElement.style.fontSize = fontSize + 'px';

    window.addEventListener('resize', function() {
        var width = window.innerWidth;
        var fontSize = width / 10;
        document.documentElement.style.fontSize = fontSize + 'px';
    })
// html 动态设置font-size 
// 函数作用域
// 变量， 不会污染外面的
})()