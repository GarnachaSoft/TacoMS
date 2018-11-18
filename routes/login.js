'use strict';

const { errors } = require ('../utils');
const { UserSchema } = require ('../schemas');

module.exports = (app, passport) => {
    passport.serializeUser ((user, done) => {
        done (null, user);
    });

    passport.deserializeUser ((user, done) => {
        done (null, user);
    });

    require ('../strategies/bearer') (app, passport);
    require ('../strategies/google') (app, passport);

    app.all ('/auth/success', async (req, res) => {
        const user = await UserSchema.model.findOne ({ _id: req.user._id });
        res
            .status (200)
            .json ({
                access_token: user.credentials.accessToken,
                data: user,
            })
        ;
    });

    app.all ('/auth/fail', (req, res) => {
        res
            .status (errors.generic.UNEXPECTED.status)
            .json (errors.generic.UNEXPECTED)
        ;
    });
};