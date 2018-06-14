const router = require('koa-router')()
const TestController = require('../controller/test')

router.prefix('/test')

router.get('/', TestController.getHtml)

module.exports = router