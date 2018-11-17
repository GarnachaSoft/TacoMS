'use strict';

const BearerStrategy = require ('passport-http-bearer');
const { errors } = require ('../utils')
const { UserModel } = require ('../models');

module.exports = (app, passport) => {
    passport.use (
        new BearerStrategy (async (accessToken, done) => {
            try {
                app.outputs.json ('TOKEN', accessToken);
                const user = await UserModel.findByToken (accessToken);

                if (!user) return done (errors.users.UNREGISTERED);
                return done (null, user);
            } catch (e) {
                return done (e);
            }
        })
    );
};