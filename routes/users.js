const router = require('koa-router')()
const UsersController = require('../controller/users')

router.prefix('/users')

router.get('/', UsersController.getUsers)

router.get('/:id', UsersController.findOne)

router.post('/', UsersController.insertUsers)

router.patch('/:id', UsersController.findOneAndUpdate)

router.delete('/:id', UsersController.findOneAndRemove)

router.get('/render', async (ctx, next) => {
  await ctx.render('users', {
    message: 'HaHa!'
  })
})
module.exports = router
