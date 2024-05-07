import express from 'express';
const app = express();

app.use(express.json()) //post

/**
 * 当前用户
 */
app.use(currentUser);

/**
 * 跨域资源共享
 */
app.use(cors({

}))


/*
 * 路由中间件
 */
app.use(
    postRouter,
    userRouter,
    ...
)

/**
 * 错误处理中间件
 */
app.use(defaultErrorHandler)
app.listen(3000)