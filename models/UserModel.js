'use strict';

const { errors } = require ('../utils');
const { UserSchema } = require ('../schemas');

const UserModel = {
    async upsert (data) {
        return await UserSchema.model.findOneAndUpdate ({ email: data.email }, data, { upsert: true });
    },

    async findById (_id) {
        return await UserSchema.model.findOne ({ _id });
    },

    async findByToken (access_token) {
        return await UserSchema.model.findOne ({
            'credentials.accessToken': access_token
        });
    },

    async create (data) {
        try {
            const user = await UserSchema.model.findOne ({ email: data.email });
            if (!!user) throw errors.users.REGISTERED;
            return await UserSchema.model.create (data);
        } catch (e) {
            throw e || errors.mongo.UNEXPECTED;
        }
    },
}
module.exports = UserModel;