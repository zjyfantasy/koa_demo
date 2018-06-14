const Users=require('../model/users')

module.exports={
    getUsers: async ()=>{
        return await Users.find().exec()
    },
    findOne:async (conditions)=>{
        return await Users.findOne(conditions)
    },
    insertUsers:async (users)=>{
        if(users instanceof Array){
            return await Users.create(...users)
        }
        return await Users.create(users)
    },
    findOneAndUpdate:async (conditions,update,options={new:true,upsert:true})=>{
        return Users.findOneAndUpdate(conditions,update,options)
    },
    findOneAndRemove: async (conditions, options={})=>{
        return Users.findOneAndRemove(conditions)
    }
}