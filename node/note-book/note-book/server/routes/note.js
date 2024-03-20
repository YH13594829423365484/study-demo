const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById } = require('../contorllers/mysqlControl.js')


router.post('/findNoteListByType', async (ctx) => {
    const { note_type } = ctx.request.body
    try {
        const res = await findNoteListByType(note_type);
        ctx.body = {
            code: '8000',
            data: res,
            msg: 'success'
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

router.get('/findNoteDetailById', async (ctx) => {
    const id = ctx.query.id;

    const res = await findNoteDetailById(id);
    try {
        if (res.length) {
            ctx.body = {
                code: '8000',
                data: res[0],
                msg: 'success'
            }
        } else {
            ctx.body = {
                code: '8004',
                data: error,
                msg: 'fail'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8004',
            data: error,
            msg: '服务端异常'
        }
    }
    
})

module.exports = router
