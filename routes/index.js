const router = require('koa-router')()
const users = require('./users')
const home = require('./home')
const test = require('./test')

router.use('/', home.routes(), home.allowedMethods())
router.use(users.routes(), users.allowedMethods())
router.use(test.routes(), test.allowedMethods())

module.exports = router
