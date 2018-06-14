const UsersDao = require('../dao/users')
var APIError = require('../helper/error')
var Response = require('../helper/response')
const Users = require('../model/users')

module.exports = {
    getUsers: async (ctx, next) => {
        try {
            let user = await UsersDao.getUsers()
            ctx.body = new Response(true, { totalCount: user.length, items: user })
        } catch (e) {
            throw new APIError('system_error', e.message, e)
        }
    },

    findOne: async (ctx, next) => {
        try {
            let conditions = { _id: ctx.params.id }
            let user = await UsersDao.findOne(conditions)
            ctx.body = new Response(user ? true : false, user)
        } catch (e) {
            throw new APIError('system_error', e.message, e)
        }
    },

    insertUsers: async (ctx, next) => {
        try {
            let newUser = ctx.request.body
            let user = await UsersDao.insertUsers(newUser)
            ctx.status = 201
        } catch (e) {
            throw new APIError('system_error', e.message, e)
        }
    },

    findOneAndUpdate: async (ctx, next) => {
        try {
            let conditions = { _id: ctx.params.id }
            let update = ctx.request.body
            let user = await UsersDao.findOneAndUpdate(conditions, update)
            ctx.status = 204
        } catch (e) {
            throw new APIError('system_error', e.message, e)
        }
    },

    findOneAndRemove: async (ctx, next) => {
        try {
            let conditions = { _id: ctx.params.id }
            let user = await UsersDao.findOneAndRemove(conditions)
            ctx.status = 204
        } catch (e) {
            throw new APIError('system_error', e.message, e)
        }
    }
}

