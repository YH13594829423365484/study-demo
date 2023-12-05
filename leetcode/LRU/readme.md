- 阿里上班
    手淘 , 菜鸟 , 阿里巴巴 , 钉钉 ....
    用户系统中心    好处；集中管理用户

    宕机的危险？

    pv/uv 访问压力巨大
    pv:用户访问页面数，yh访问20个页面
    10 万人 uv 明确的登录+ ip+mac

    压力到底在哪些？
    - 流量洪峰
        服务器集群  随机算法 
    - 数据库在哪？
        select 查询 ， I/O瓶颈
        内存，CPU 
        解决方案？  SQL
    - 加缓存 
        id  user yh ........
        I/O -> memory cache (内存key=>value)
        select 真查询 之后 在cache set一下
        cache id get
        90% 数据库查询给挡住了
    - 用户模块
        不一定 缓存命中，
        99%    命中 cache   key=>value
        重写了数据库 重新读一次
        cache  也是有容量上限的  内存上限

LRU  最近最少使用原则
    刚进来，  频繁进来
    一个月之前来过，后来没来了，

    redis 
    容量   set  get
    LRU 最近最少使用的， 删除